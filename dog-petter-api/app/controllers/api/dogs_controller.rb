class Api::DogsController < ApplicationController

  def index
    render json: Dog.all
  end

end
