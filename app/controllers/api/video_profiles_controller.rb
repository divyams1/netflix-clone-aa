class Api::VideoProfilesController < ApplicationController 
    def create 
       
        video_profile = VideoProfile.create(video_profile_params)
        
        if video_profile.save 
            render json: video_profile 
        else  
            render json: video_profile.errors.full_messages, status: 422 
        end 

    end 

    def index 
        video_profiles = VideoProfile.all 
        render json: video_profiles 
    end 

    private 
    def video_profile_params 
        params.require(:video_profile).permit(:video_id, :profile_id)
    end 
end 