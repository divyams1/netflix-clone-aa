class Api::VideosController < ApplicationController 

    def index
        @videos = Video.all 
        render :index 
    end 

    def show
        @video = Video.find(params[:id])
        render :show 
    end 

    private

    def video_params
        params.require(:video).permit(:title, :description, :time)
    end 






end