# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
video1 = Video.create(title: "Guardians of the Galaxy",  description:
  " A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser.", time: Mon, 04 Mar 0002 05:00:00 UTC +00:00)
video2 = Video.create(title: "Daredevil", description: "Blinded in a childhood accident, attorney-at-law Matt Murdock protects Hell’s Kitchen as the masked vigilante, Daredevil." , time: DateTime.new(5,2,5) )
video3 = Video.create(title: "Avatar the Last Airbender" , description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", time: DateTime.new(6,2,5) )
video4 = Video.create(title: "Arrow", description: "After a violent shipwreck, billionaire playboy Oliver Queen (Stephen Amell) was missing and presumed dead for five years before being discovered alive on a remote island in the North China Sea. He returned home to Star City, bent on righting the wrongs done by his family and fighting injustice.",
time: DateTime.new(5,2,3) )
video5 = Video.create(title: "The Flash" , description: "At 11, Barry Allen's life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Orphaned Barry later becomes Detective Joe West. Now a crime-scene investigator, his dedication to learn the truth about his mother's death drives him to
follow up on every new scientific advancement and urban legend.", time: DateTime.new(3,1,2) )
video6 = Video.create(title: "The Boys", description: "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good." ,  time: DateTime.new(1,1,1) )