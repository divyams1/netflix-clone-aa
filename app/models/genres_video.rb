class GenresVideo < ApplicationRecord

    belongs_to :video 
    belongs_to :genre
end
