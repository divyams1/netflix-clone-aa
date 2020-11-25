json.array! @genres do |genre|
    json.extract! genre, :name, :video_ids
end 