# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all 
Genre.destroy_all
GenresVideo.delete_all
VideoProfile.delete_all


video1 = Video.create(title: "Guardians of the Galaxy",  description:
  " A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser.", time: DateTime.new(5,2,5))
vid1 = open('https://netflix-ds-seeds.s3.amazonaws.com/gotg.mp4')
photo1 = open('https://netflix-ds-seeds.s3.amazonaws.com/gotg2.jpg')

video1.video.attach(io: vid1, filename: 'gotg.mp4')
video1.photo.attach(io: photo1, filename: 'gotg2.jpg')


video2 = Video.create(title: "Daredevil", description: "Blinded in a childhood accident, attorney-at-law Matt Murdock protects Hell’s Kitchen as the masked vigilante, Daredevil." , time: DateTime.new(5,2,5) )
vid2 = open('https://netflix-ds-seeds.s3.amazonaws.com/daredevil.mp4')
photo2 = open('https://netflix-ds-seeds.s3.amazonaws.com/daredevil2.jpg')

video2.video.attach( io: vid2, filename: 'daredevil.mp4')
video2.photo.attach( io: photo2, filename: 'daredevil2.jpg')


video3 = Video.create(title: "Avatar the Last Airbender" , description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", time: DateTime.new(6,2,5) )
vid3 = open('https://netflix-ds-seeds.s3.amazonaws.com/avatar.mp4')
photo3 = open('https://netflix-ds-seeds.s3.amazonaws.com/avatar3.jpg')

video3.video.attach( io: vid3, filename: 'avatar.mp4')
video3.photo.attach( io: photo3, filename: 'avatar3.jpg')


video4 = Video.create(title: "Arrow", description: "After a violent shipwreck, billionaire playboy Oliver Queen (Stephen Amell) was missing and presumed dead for five years before being discovered alive on a remote island in the North China Sea. He returned home to Star City, bent on righting the wrongs done by his family and fighting injustice.",
time: DateTime.new(5,2,3) )
vid4 = open('https://netflix-ds-seeds.s3.amazonaws.com/arrow.mp4')
photo4 = open('https://netflix-ds-seeds.s3.amazonaws.com/arrow3.png')


video4.video.attach( io: vid4, filename: 'arrow.mp4')
video4.photo.attach( io: photo4, filename: 'arrow3.png')

video5 = Video.create(title: "The Flash" , description: "At 11, Barry Allen's life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Orphaned Barry later becomes Detective Joe West. Now a crime-scene investigator, his dedication to learn the truth about his mother's death drives him to
follow up on every new scientific advancement and urban legend.", time: DateTime.new(3,1,2) )
vid5 = open('https://netflix-ds-seeds.s3.amazonaws.com/flash.mp4')
photo5 = open('https://netflix-ds-seeds.s3.amazonaws.com/flash.jpg')

video5.video.attach( io: vid5, filename: 'flash.mp4')
video5.photo.attach( io: photo5, filename: 'flash.jpg')


video6 = Video.create(title: "The Boys", description: "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good." ,  time: DateTime.new(1,1,1) )
vid6 = open('https://netflix-ds-seeds.s3.amazonaws.com/theboys.mp4')
photo6 = open('https://netflix-ds-seeds.s3.amazonaws.com/theboys.jpg')

video6.video.attach( io: vid6, filename: 'theboys.mp4')
video6.photo.attach( io: photo6, filename: 'theboys.jpg')

video7 = Video.create( title: "WandaVision", description: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems",time: DateTime.new(1,1,1))
vid7 = open('https://netflix-ds-seeds.s3.amazonaws.com/wanda.mp4')
photo7 = open('https://netflix-ds-seeds.s3.amazonaws.com/wanda.jpg')

video7.video.attach(io: vid7, filename: 'wanda.mp4')
video7.photo.attach(io: photo7, filename: 'wanda.jpg')

video8 = Video.create( title: 'The Batman', description: "The Batman is an upcoming American superhero film based on the DC Comics character of the same name.",time: DateTime.new(2020,1,2,3,4))
vid8 = open('https://netflix-ds-seeds.s3.amazonaws.com/batman.mp4')
photo8 = open('https://netflix-ds-seeds.s3.amazonaws.com/batman6.jpg')

video8.video.attach(io: vid8, filename: 'batman.mp4')
video8.photo.attach(io: photo8, filename: 'batman6.jpg')

# video9 = Video.create( title: 'Loki', description: "Loki is an upcoming American television series created by Michael Waldron for the streaming service Disney+, based on the Marvel Comics character of the same name.", time: DateTime.new(2020,2,3,4,5))
# vid9 = open('https://netflix-ds-seeds.s3.amazonaws.com/loki.mp4')
# photo9 = open('https://netflix-ds-seeds.s3.amazonaws.com/loki.png')

# video9.photo.attach(io: vid9, filename: 'loki.mp4')
# video9.video.attach(io: photo9, filename: 'loki.png')


#Genre Seed Data 

genre1 = Genre.create(name: "Trending" )
genre2 = Genre.create(name: "Popular" )
genre3 = Genre.create(name: "Action")
genre4 = Genre.create(name: "Thriller")

genre_id_1 = genre1.id 
genre_id_2 = genre2.id 
genre_id_3 = genre3.id 
genre_id_4 = genre4.id 


video_id_1 = video1.id
video_id_2 = video2.id
video_id_3 = video3.id
video_id_4 = video4.id
video_id_5 = video5.id
video_id_6 = video6.id
video_id_7 = video7.id
video_id_8 = video8.id
# video_id_9 = video9.id

#Genre Video Seed Data 
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_1)
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_2)
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_3)
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_4)
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_5)
GenresVideo.create( genre_id: genre_id_1, video_id: video_id_8)
# GenresVideo.create( genre_id: genre_id_1, video_id: video_id_9)

GenresVideo.create( genre_id: genre_id_2, video_id: video_id_2)
GenresVideo.create( genre_id: genre_id_2, video_id: video_id_3)
GenresVideo.create( genre_id: genre_id_2, video_id: video_id_6)
GenresVideo.create( genre_id: genre_id_2, video_id: video_id_8)
# GenresVideo.create( genre_id: genre_id_2, video_id: video_id_9)
GenresVideo.create( genre_id: genre_id_2, video_id: video_id_5)


# GenresVideo.create( genre_id: genre_id_3, video_id: video_id_9)
GenresVideo.create( genre_id: genre_id_3, video_id: video_id_8)
GenresVideo.create( genre_id: genre_id_3, video_id: video_id_7)
GenresVideo.create( genre_id: genre_id_3, video_id: video_id_6)
GenresVideo.create( genre_id: genre_id_3, video_id: video_id_5)
GenresVideo.create( genre_id: genre_id_3, video_id: video_id_2)


GenresVideo.create( genre_id: genre_id_4, video_id: video_id_1)
GenresVideo.create( genre_id: genre_id_4, video_id: video_id_3)
GenresVideo.create( genre_id: genre_id_4, video_id: video_id_5)
GenresVideo.create( genre_id: genre_id_4, video_id: video_id_7)
# GenresVideo.create( genre_id: genre_id_4, video_id: video_id_9)
GenresVideo.create( genre_id: genre_id_4, video_id: video_id_4)
GenresVideo.create( genre_id: genre_id_4, video_id: video_id_6)



