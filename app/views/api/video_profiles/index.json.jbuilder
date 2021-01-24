json.array! @video_profiles do |video_profile|
    json.extract! video_profile, :id, :profile_id, :video_id 
end 