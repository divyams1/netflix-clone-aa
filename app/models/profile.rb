class Profile < ApplicationRecord 

    validates :name, presence: true
    has_many :video_profiles 
    has_many :videos, :through => :video_profiles
    belongs_to :user,
        primary_key: :id, 
        foreign_key: :user_id
end 