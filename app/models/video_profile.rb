class VideoProfile < ApplicationRecord
    belongs_to :video, optional: true 
    belongs_to :course, optional: true 
end
