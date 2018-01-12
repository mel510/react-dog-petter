class Api::DogsController < ApplicationController
  before_action :current_dog, only: [:show, :update, :destroy]

  def index
    render json: Dog.all
  end

  def show
    render json: @dog
  end

  def create
    dog = Dog.new(dog_params)
    if dog.save
      render json: dog
    else
      render json: { message: dog.errors}, status: 400
    end
  end

  def update
    if @dog.update(dog_params)
      render json: @dog
    else
      render json: { message: @dog.errors }, status: 400
    end
  end

  def destroy
    if @dog.destroy
      render status: 204
    else
      render json: { message: @dog.errors }, status: 400
    end
  end

  private
    def dog_params
      params.require(:dog).permit(:name, :location, :image_url, :date, :breed, :like)
    end

    def current_dog
      @dog = Dog.find_by(id: params[:id])
    end

end
