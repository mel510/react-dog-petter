class AddDefaultToDog < ActiveRecord::Migration[5.1]
  def change
    change_column_default :dogs, :image_url, 'https://i.imgur.com/hSfKdgy.png'
  end
end
