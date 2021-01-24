Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: 'static_pages#root'
   namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:create, :index, :show]
    resources :videos, only: [:show, :index]
    resources :genres, only: [:show, :index]
    resources :video_profiles, only: [:show, :create, :index]
  end 
  
end
