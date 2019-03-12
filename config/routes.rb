Rails.application.routes.draw do
  resources :waypoints
  resources :routes
  resources :routes do
  	resources :waypoints
  end
  namespace :api do
    namespace :v1 do
      resources :routes do
      	resources :waypoints
    	end
    end
end
  get 'homepage/home'
  root 'homepage#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
