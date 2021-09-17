Rails.application.routes.draw do
  root 'welcome_pages#top'
  get '/select', to: 'welcome_pages#index'
end
