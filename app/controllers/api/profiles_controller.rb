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
        profile = Profile.all.includes(:user)
        render json: profile
    end 

    private
    def profile_params 
        params.require(:profile).permit(:name, :user_id)
    end 









end 