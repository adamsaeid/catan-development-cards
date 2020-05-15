class AddResourcesToPlayers < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :brick_count, :integer
    add_column :players, :lumber_count, :integer
    add_column :players, :ore_count, :integer
    add_column :players, :wool_count, :integer
    add_column :players, :grain_count, :integer
  end
end
