class CreateWaypoints < ActiveRecord::Migration[5.2]
  def change
    create_table :waypoints do |t|
      t.decimal :x
      t.decimal :y
      t.belongs_to :route, foreign_key: true

      t.timestamps
    end
  end
end
