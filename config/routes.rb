Rails.application.routes.draw do
  resources :waypoints
  resources :routes
  resources :routes do
  	resources :waypoints
  end
  get 'homepage/home'
  root 'homepage#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
