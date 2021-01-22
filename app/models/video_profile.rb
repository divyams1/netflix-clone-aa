class VideoProfile < ApplicationRecord
    belongs_to :video 
    belongs_to :course 
end
