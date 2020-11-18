class Profile < ApplicationRecord 

    validates :name, presence: true

    belongs_to :user,
        primary_key: :id, 
        foreign_key: :user_id
end 