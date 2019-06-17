class HomeController < ApplicationController
  def index
  end

  def create
    session[:something] = 'something'
    render json: {}
  end

  def access_key
    render json: session.to_h 
  end
end
