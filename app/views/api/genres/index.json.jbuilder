json.array! @genres do |genre|
    json.extract! genre, :name, :videos, :video_ids
end 