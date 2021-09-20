Rails.application.routes.draw do
  resources :maps, only: %i[index new create]
end
