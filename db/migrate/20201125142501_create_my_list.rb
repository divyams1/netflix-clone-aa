class CreateMyList < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :profile_id, null: false 
    end
  end
end
