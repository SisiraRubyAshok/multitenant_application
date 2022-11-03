class AddNameToTenants < ActiveRecord::Migration[6.1]
  def change
    add_column :tenants, :name, :string if table_exists? :tenants
  end
end
