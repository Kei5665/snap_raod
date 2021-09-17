class MapsController < ApplicationController
  protect_from_forgery
  def index
  end

  def top
    @hash_all = Map.all

    @json_array = []
    @title_array = []
    @name_array = []
    @body_array = []

    @hash_all.each do |f|
        
        title = f.title
        name = f.name
        body = f.body

        json = JSON.dump(f.jsonb_data)

        @title_array.push(title)
        @json_array.push(json)
        @name_array.push(name)
        @body_array.push(body)
    end
    gon.titls = @title_array
    gon.jsons = @json_array
    gon.names = @name_array
    gon.bodys = @body_array
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
