class Api::ProfilesController < ApplicationController 

    def create 
        profile = Profile.create(profile_params)

        if profile.save
            render json: profile 
        else 
            render json: profile.errors.full_messages, status: 422 
        end 
    end 

    def index 
        @profiles = Profile.all.includes(:user)
        render :index
    end 

    def show 
        @profile = Profile.find(params[:id])
        render :show 
    end 

    private
    def profile_params 
        params.require(:profile).permit(:name, :user_id)
    end 









end 