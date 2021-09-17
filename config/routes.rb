Rails.application.routes.draw do
  root 'welcome_pages#top'

  resources :maps
  resources :trials
  get '/maps_all',to: 'maps#top'
  get '/trials_all',to: 'trials#top'
  get 'select', to: 'welcome_pages#index'
end
