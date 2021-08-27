Rails.application.routes.draw do
  root 'home#welcome'
  get 'home/games'
  get 'home/login'
end
