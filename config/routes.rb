Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :shows, only: :index
      resources :client_search_queries, only: :create
    end
  end
end
