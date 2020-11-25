json.extract! @video, :id, :title, :description
json.videoUrl url_for(@video.video)
json.photoUrl url_for(@video.photo)