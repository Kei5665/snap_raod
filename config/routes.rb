Rails.application.routes.draw do
  root 'welcome_pages#index'

  resources :maps do
    collection do
      get 'trial'
    end  
  end
  get '/maps_all',to: 'maps#top'
end
