class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :location
      t.string :image_url
      t.string :date
      t.string :breed

      t.timestamps
    end
  end
end
