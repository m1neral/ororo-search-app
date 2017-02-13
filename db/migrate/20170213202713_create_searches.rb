class CreateSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :searches do |t|
      t.references :server_log, foreign_key: true
      t.references :client_log, foreign_key: true
      t.integer :results_count
      t.timestamps
    end
  end
end
