Rails.application.routes.draw do
  root 'home#welcome'
  get 'home/games'
  get 'home/login'
  get 'home/learn_projectile'
  get 'home/learn_friction'
end
