json.array! @profiles do |profile| 
    json.extract! profile, :id, :name, :videos 
end 