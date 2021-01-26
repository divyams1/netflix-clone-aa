json.array! @videos do |video|
    json.extract! video, :id, :title, :description, :genres
    json.videoUrl url_for(video.video)
    json.photoUrl url_for(video.photo)
end 