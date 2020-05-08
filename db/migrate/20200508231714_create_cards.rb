class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.references :player, foreign_key: true
      t.string :image_url
      t.datetime :played_at

      t.timestamps
    end
  end
end
