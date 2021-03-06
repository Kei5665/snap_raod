var apiKey = 'AIzaSyDC4lRXp8WvphHA76VX90sAcPyFFvfKM6Q';

var map;
var drawingManager;
var placeIdArray = [];
var polylines = [];
var snappedCoordinates = [];

function initialize() {
    var mapOptions = {
        zoom: 18,
        center: {lat: 38.235703532607666, lng: 140.32471532697008,}
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adds a Places search box. Searching for a place will center the map on that
    // location.
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
        document.getElementById('bar'));
    var autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autoc'));
    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
        } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
        }
    });
}

function runSnapToRoad() {

    title_array = gon.titls
    name_array = gon.names
    body_array = gon.bodys
    
    const targetElem = gon.jsons
    const targetCount = targetElem.length;
    let textArray = [];

    for (let i = 0; i < targetCount; i++) {
        let num = i + 1;

        textArray.push(targetElem[i]);
        json = JSON.parse(textArray[i])
        title = title_array[i]
        name = name_array[i]
        body = body_array[i]

        processSnapToRoadResponse(json)
        drawSnappedPolyline(title,name,body);
    }
}

// Store snapped polyline returned by the snap-to-road service.
function processSnapToRoadResponse(json) {
    snappedCoordinates = [];
    for (var i = 0; i < json.snappedPoints.length; i++) {
        var latlng = new google.maps.LatLng(
            json.snappedPoints[i].location.latitude,
            json.snappedPoints[i].location.longitude);

        snappedCoordinates.push(latlng);
    }
}

// Draws the snapped polyline (after processing snap-to-road response).
function drawSnappedPolyline(title,name,body) {
    var snappedPolyline = new google.maps.Polyline({
        path: snappedCoordinates,
        strokeColor: 'red',
        strokeWeight: 5,
        strokeOpacity: 1,
    });
    snappedPolyline.setMap(map);
    polylines.push(snappedPolyline);

    createInfoWindow(snappedPolyline,
    `<p>????????????: ${title}</p>
    <p>???????????????: ${name}</p>
    <p>????????????: ${body}</p>`);
}

function createInfoWindow(snappedPolyline, content) {
    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(snappedPolyline, 'click', function(event) {
        // infowindow.content = content;
        infowindow.setContent(content);
    
        
        // infowindow.position = event.latLng;
        infowindow.setPosition(event.latLng);
        infowindow.open(map);
    });
}

$(window).load(initialize);
$(window).load(runSnapToRoad);