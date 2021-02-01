json.array! @profiles do |profile| 
    json.extract! profile, :id, :name, :videos, :user_id
end 