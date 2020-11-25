# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

video1 = Video.create(title: "Guardians of the Galaxy",  description:
  " A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser.", time: DateTime.new(5,2,5))
vid1 = open('https://s3.amazonaws.com/netflix-ds-seeds/gotg.mp4')
photo1 = open('https://s3.amazonaws.com/netflix-ds-seeds/gotg.jpg')

video1.video.attach(io: vid1, filename: 'gotg.mp4')
video1.photo.attach(io: photo1, filename: 'gotg.jpg')


video2 = Video.create(title: "Daredevil", description: "Blinded in a childhood accident, attorney-at-law Matt Murdock protects Hell’s Kitchen as the masked vigilante, Daredevil." , time: DateTime.new(5,2,5) )
vid2 = open('https://s3.amazonaws.com/netflix-ds-seeds/daredevil.mp4')
photo2 = open('https://s3.amazonaws.com/netflix-ds-seeds/daredevil.jpg')

video2.video.attach( io: vid2, filename: 'daredevil.mp4')
video2.photo.attach( io: photo2, filename: 'daredevil.jpg')


video3 = Video.create(title: "Avatar the Last Airbender" , description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", time: DateTime.new(6,2,5) )
vid3 = open('https://s3.amazonaws.com/netflix-ds-seeds/avatar.mp4')
photo3 = open('https://s3.amazonaws.com/netflix-ds-seeds/avatar.jpg')

video3.video.attach( io: vid3, filename: 'avatar.mp4')
video3.photo.attach( io: photo3, filename: 'avatar.jpg')


video4 = Video.create(title: "Arrow", description: "After a violent shipwreck, billionaire playboy Oliver Queen (Stephen Amell) was missing and presumed dead for five years before being discovered alive on a remote island in the North China Sea. He returned home to Star City, bent on righting the wrongs done by his family and fighting injustice.",
time: DateTime.new(5,2,3) )
vid4 = open('https://s3.amazonaws.com/netflix-ds-seeds/arrow.mp4')
photo4 = open('https://s3.amazonaws.com/netflix-ds-seeds/arrow.png')


video4.video.attach( io: vid4, filename: 'arrow.mp4')
video4.photo.attach( io: photo4, filename: 'arrow.png')

video5 = Video.create(title: "The Flash" , description: "At 11, Barry Allen's life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Orphaned Barry later becomes Detective Joe West. Now a crime-scene investigator, his dedication to learn the truth about his mother's death drives him to
follow up on every new scientific advancement and urban legend.", time: DateTime.new(3,1,2) )
vid5 = open('https://s3.amazonaws.com/netflix-ds-seeds/flash.mp4')
photo5 = open('https://s3.amazonaws.com/netflix-ds-seeds/flash.jpg')

video5.video.attach( io: vid5, filename: 'flash.mp4')
video5.photo.attach( io: photo5, filename: 'flash.jpg')


video6 = Video.create(title: "The Boys", description: "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good." ,  time: DateTime.new(1,1,1) )
vid6 = open('https://s3.amazonaws.com/netflix-ds-seeds/theboys.mp4')
photo6 = open('https://s3.amazonaws.com/netflix-ds-seeds/theboys.jpg')

video6.video.attach( io: vid6, filename: 'theboys.mp4')
video6.photo.attach( io: photo6, filename: 'theboys.jpg')





#Genre Seed Data 

Genre.create(name: "Trending" )
Genre.create(name: "Popular" )
Genre.create(name: "Action")
Genre.create(name: "Thriller")

#Genre Video Seed Data 
GenresVideo.create( genre_id: 1, video_id: 1)
GenresVideo.create( genre_id: 1, video_id: 2)
GenresVideo.create( genre_id: 1, video_id: 3)
GenresVideo.create( genre_id: 1, video_id: 4)
GenresVideo.create( genre_id: 1, video_id: 5)
GenresVideo.create( genre_id: 1, video_id: 6)
GenresVideo.create( genre_id: 1, video_id: 7)
GenresVideo.create( genre_id: 2, video_id: 1)
GenresVideo.create( genre_id: 2, video_id: 2)
GenresVideo.create( genre_id: 2, video_id: 3)
GenresVideo.create( genre_id: 2, video_id: 4)
GenresVideo.create( genre_id: 2, video_id: 5)
GenresVideo.create( genre_id: 2, video_id: 6)
GenresVideo.create( genre_id: 2, video_id: 7)
GenresVideo.create( genre_id: 3, video_id: 1)
GenresVideo.create( genre_id: 3, video_id: 2)
GenresVideo.create( genre_id: 3, video_id: 3)
GenresVideo.create( genre_id: 3, video_id: 4)
GenresVideo.create( genre_id: 3, video_id: 5)
GenresVideo.create( genre_id: 3, video_id: 6)
GenresVideo.create( genre_id: 3, video_id: 7)
GenresVideo.create( genre_id: 4, video_id: 1)
GenresVideo.create( genre_id: 4, video_id: 2)
GenresVideo.create( genre_id: 4, video_id: 3)
GenresVideo.create( genre_id: 4, video_id: 4)
GenresVideo.create( genre_id: 4, video_id: 5)
GenresVideo.create( genre_id: 4, video_id: 6)
GenresVideo.create( genre_id: 4, video_id: 7)