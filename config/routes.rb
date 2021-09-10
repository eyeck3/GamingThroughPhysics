Rails.application.routes.draw do
  root 'home#welcome'
  get 'home/games'
  get 'home/login'
  get 'home/learn_projectile'
  get 'home/learn_friction'

  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'

  get 'games/basketball_game'

  get 'sign_in', to: 'sessions#new'
  post 'sign_in', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'password', to: 'passwords#edit', as: :edit_password
  patch 'password', to: 'passwords#update'
end
