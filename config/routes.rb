Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "greetings#index"
  # resources :greetings, only: [:index, :show] 

  namespace :api do
    resources :greetings, only: [:index]
  end

  # get '/api/greeting', to: 'greetings#greeting'
  # Defines the root path route ("/")
  # root "articles#index"
end
