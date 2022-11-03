class Tenant < ApplicationRecord
	# attr_accessor :subdomain
  after_create :create_schema

  validates_presence_of :subdomain, :name
  validates_uniqueness_of :subdomain
  
  def create_schema
   self.class.connection.execute("create schema tenant#{id}")
    scope_schema do
      load Rails.root.join("db/schema.rb")
      self.class.connection.execute("drop table #{self.class.table_name}")
    end
  end

  def scope_schema(*paths)
    original_search_path =  self.class.connection.schema_search_path
     self.class.connection.schema_search_path = ["tenant#{id}", *paths].join(",")
    yield
  ensure
     self.class.connection.schema_search_path = original_search_path
  end
end
