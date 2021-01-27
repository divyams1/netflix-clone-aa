# README

## HeroFlix is a video streaming service that allows users sign up, create induvidual profiles, and browse and watch videos. HeroFlix was built using a Rails backend, a PostgreSQL databse, and a fontend built on React-Redux. The site was hosted on Heroku, and video information was stored on Amazon Web Services.

[Heroflix](https://netflix-clone-a-a.herokuapp.com/)


## Key Features:
    * Account Creation
    * Profile Creation
    * Watch Videos that are sorted by Genre


## 

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

## Video Effects 
    ![alt-text](https://im3.ezgif.com/tmp/ezgif-3-b942842ea35f.mp4)
    In order to make a similar effect to the Netflix videos, CSS was primarily used. The container that stored the video image contained both the image that is displayed and the video that plays on hover with the video having a display of none, so that is is hidden. CSS transition effects were used to increase the size of the container and make the transition smooth, and the display on the video and the image were swapped so that the video would show, while the image would disapear on hover. 

```CSS 
.video-cont {
    display: none;
    min-height: 200px;
}
.big-box:hover .big-box {
    transform: translateX(-20%);
}
.big-box:hover {
    transform: scale(1.5)
}
.big-box:hover .video-cont {
    display: absolute;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    min-height: 170px;
}

```


# Future Directions 

In the future I would like to add more information to the video's such as actors or if it is a movie or a tv series. With extra information on each video item, I would be able to improve the search feature to be able to filter on other metrics besides the title of the video. 
In addition, I would want to use a library like slider.js in order to improve the slider and the animations that are used when a user wants to scroll through a particular genre on the video show page. 