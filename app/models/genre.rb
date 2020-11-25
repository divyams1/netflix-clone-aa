class Genre < ApplicationRecord 

    validates :name, presence: true

    has_many :genres_video
    has_many :videos, :through => :genres_video
end 