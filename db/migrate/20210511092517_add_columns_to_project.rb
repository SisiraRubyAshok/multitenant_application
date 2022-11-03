class AddColumnsToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :description, :string
    add_column :projects, :service_provider, :string
    add_column :projects, :client_email, :string
  end
end
