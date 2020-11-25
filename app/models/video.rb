class Video < ApplicationRecord 
    validates :title, presence: true 
    validates :time, presence: true 

    has_many :genres_video
    has_many :genres, :through => :genres_video

    has_one_attached :video
    has_one_attached :photo
end 

