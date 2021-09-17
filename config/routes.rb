Rails.application.routes.draw do
  root 'welcome_pages#index'

  resources :maps
  resources :trials
  get '/maps_all',to: 'maps#top'
end
