class MyList < ApplicationRecord 
    belongs_to :profile,
        primary_key: :id, 
        foreign_key: :profile_id 
    has_many :videos,
        primary_key: :id, 
        foreign_key: :my_list_id 

end 