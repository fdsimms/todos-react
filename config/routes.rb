Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:create, :index, :destroy, :show, :update]
  end
end
