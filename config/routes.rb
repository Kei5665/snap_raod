Rails.application.routes.draw do
  root 'welcome_pages#index'

  resources :maps
  get '/maps_all',to: 'maps#top'
end
