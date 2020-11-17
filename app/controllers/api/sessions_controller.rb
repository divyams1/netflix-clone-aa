class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil? 
            render json: ["Invalid username or password"], status: 401 
        else 
            login!(@user)
            render 'api/users/show'
        end 
    end 

    def destroy 
        if current_user.nil? 
            render status: 404 
        end 
        logout! 
        render json: {}
    end 
end 