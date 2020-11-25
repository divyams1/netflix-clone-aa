class EditGenreTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :genres, :type
    add_column :genres, :name, :string, null: false
  end
end
