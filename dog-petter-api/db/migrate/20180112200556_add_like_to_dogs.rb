class AddLikeToDogs < ActiveRecord::Migration[5.1]
  def change
    add_column :dogs, :like, :integer, default: 0
  end
end
