# README

## HeroFlix is a video streaming service that allows users sign up, create induvidual profiles, and browse and watch videos. HeroFlix was built using a Rails backend, a PostgreSQL databse, and a fontend built on React-Redux. The site was hosted on Heroku, and video information was stored on Amazon Web Services.

[Heroflix](https://netflix-clone-a-a.herokuapp.com/)


## Key Features:
    * Account Creation
    * Profile Creation
    * Watch Videos that are sorted by Genre


## Development Insights:
In order to watch Videos by Genre, a joins table was made between the video and the genre, and with the joins table, associations were made between the videos and the genres so that a genre would know what video it belongs to, and a video would be able to have access to the genres it is a part of. 
```Ruby
    create_table "genres_videos", id: false, force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "video_id", null: false
  end
```
```Ruby 
    class Genre < ApplicationRecord 

        validates :name, presence: true

        has_many :genres_video
        has_many :videos, :through => :genres_video
    end 
    class Video < ApplicationRecord 
     has_many :genres_video
     has_many :genres, :through => :genres_video
    end
```
    With the associations made, the genre and video data just needed to be added in the json that is sent to the frontend when the backend routes for the videos or the genres are requested. 

```Ruby 
    json.extract! @genre, :name, :video_ids, :videos 

     json.extract! video, :id, :title, :description, :genres
```







# Future Directions 
