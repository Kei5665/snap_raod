Rails.application.routes.draw do
  root 'welcome_pages#index'

  resources :maps
end
