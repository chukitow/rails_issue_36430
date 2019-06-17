Rails.application.routes.draw do
  resources :home, only: [:index, :create] do
    collection do
      get :access_key
    end
  end

  root 'home#index'
end
