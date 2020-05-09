class AddNameToCard < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :name, :string
  end
end
