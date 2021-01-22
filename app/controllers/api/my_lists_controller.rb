class Api::MyListsController < ApplicationController 
    def create 
        my_list = MyList.create(my_list_params)

        if my_list.save 
            render json: my_list 
        else 
            render json: my_list.errors.full_messages, status: 422 
        end 
    end 

    private 
    def my_list_params 
        params.require(:my_list).permit(:profile_id, :video_id)
    end 
end 