class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false 
      t.datetime :time, null: false 

    end
    add_index :videos, :title 
  end
end
