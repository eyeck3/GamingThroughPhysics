Rails.application.routes.draw do
  root 'home#welcome'
  get 'home/games'
  get 'home/login'
  get 'home/learn_projectile'
  get 'home/learn_friction'
  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'
end
