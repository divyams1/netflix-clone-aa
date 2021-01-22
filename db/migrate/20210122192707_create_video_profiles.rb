class CreateVideoProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :video_profiles do |t|
      t.integer :profile_id 
      t.integer :video_id 
      t.timestamps
    end
  end
end
