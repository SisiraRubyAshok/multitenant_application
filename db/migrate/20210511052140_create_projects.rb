class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :Project_name
      t.string :Client_name
      t.string :Developers
      t.string :Status
      t.string :Invoice_status
      t.integer :Working_hours
      t.datetime :Starting_date
      t.integer :user_id

      t.timestamps
    end
  end
end
