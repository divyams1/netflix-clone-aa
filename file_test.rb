class Video < ApplicationRecord 
    validates :title, presence: true 
    validates :time, presence: true 

    has_one_attached :video

end 

puts Dir.pwd
video = Video.first 
file = File.open('C:\FullStackVideos')
video.video.attach(io: file, filename: 'The_Boys')
video.video.attached?