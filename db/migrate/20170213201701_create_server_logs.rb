class CreateServerLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :server_logs do |t|
      t.string :sort_by
      t.string :genres, array: true
      t.timestamps
    end
  end
end
