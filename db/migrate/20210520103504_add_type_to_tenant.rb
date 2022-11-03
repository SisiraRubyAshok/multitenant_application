class AddTypeToTenant < ActiveRecord::Migration[6.1]
  def change
    add_column :tenants, :type, :string
  end
end
