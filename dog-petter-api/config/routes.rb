Rails.application.routes.draw do
  namespace :api do
    resources :dogs, only: [:index, :create, :show, :update, :destroy]
  end
end
