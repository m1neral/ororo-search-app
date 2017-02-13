class CreateClientLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :client_logs do |t|
      t.string :query
      t.timestamps
    end
  end
end
