class Api::GenresController < ApplicationController 
    def index 
        @genres = Genre.all
        render :index
    end 

    def show 
        @genre = Genre.find(params[:id])
        render :show
    end 

    private
    def profile_params 
        params.require(:genre).permit(:name)
    end 
end 