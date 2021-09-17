class MapsController < ApplicationController
  protect_from_forgery
  def index
  end

  def top
  end

  def create 
    json =  params[:data]
    title = params[:title]
    name = params[:name]
    body = params[:body]
    json_data = JSON.parse(json)

    @json = Map.new(
        jsonb_data: json_data,
        title: title,
        name: name,
        body: body
    )
    @json.save!
  end
end
