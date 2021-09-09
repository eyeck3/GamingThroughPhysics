class HomeController < ApplicationController
  def welcome
    if session[:user_id]
      @user = User.find_by(id: session[:user_id])
    end
  end
  def games
  end
  def login
  end
  def learn_projectile
  end
  def learn_friction
  end
end
