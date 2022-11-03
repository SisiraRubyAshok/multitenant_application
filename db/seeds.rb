# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

unless User.find_by_email('superadmin@clientapp').present?
  user = User.create(email: "superadmin@clientapp", password: "super@123", first_name: "super", last_name: "admin", role_id: 4)
end