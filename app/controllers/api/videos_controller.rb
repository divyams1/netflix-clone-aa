class Api::VideosController < ApplicationController 

    def index
        @videos = Video.all
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