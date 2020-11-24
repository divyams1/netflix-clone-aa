class Video < ApplicationRecord 
    validates :title, presence: true 
    validates :time, presence: true 

    has_one_attached :video
    has_one_attached :photo
end 

