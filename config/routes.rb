Rails.application.routes.draw do
  resources :maps
  get '/maps_all',to: 'maps#top'
end
