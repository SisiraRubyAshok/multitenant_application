require 'rails_helper'

RSpec.describe "Sign in page", :js => true do
  it "displays the content of the sign in page" do
    # Login page with signup and forgot password
    visit("http://techversant.lvh.me:3000/user/login") # "techversant" is a subdomain name

    expect(page).to have_content("LOG IN")
    expect(page).to have_content("Remember me")

    check('user[remember_me]')
    puts "waiting..."
    sleep 0.5
    uncheck('user[remember_me]')

    #signup page connection
    click_link "Sign up"
    expect(current_path).to eql("/user/sign_up")
    expect(page).to have_content("Sign up")

    #login page connection from signup page
    click_link "Log in"
    expect(current_path).to eql("/user/login")

    #signup page connection from login page
    click_link "Sign up"
    expect(current_path).to eql("/user/sign_up")

    #signup with details
    attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    fill_in "user[first_name]", with: "Demo"
    fill_in "user[last_name]", with: "Developer"
    fill_in "user[email]", with: "demo_developer@clientapp.com"
    select("Developer", from: "user[role_id]").select_option # To select role of the user
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"
    click_button "Sign up"

    #forgot password page connection
    click_link "Forgot your password?"
    expect(current_path).to eql("/user/forgot/new")
    expect(page).to have_content("Forgot your password?")

    #login page connection from forgot password page
    click_link "Log in"
    expect(current_path).to eql("/user/login")

    #forgot password page connection from login page
    click_link "Forgot your password?"
    expect(current_path).to eql("/user/forgot/new")

    #forgot password page with details
    fill_in "user[email]", with: "demo_developer@clientapp.com"
    click_button "Send me reset password instructions"

    #login as user developer
    expect(current_path).to eql("/user/login")
    fill_in "user[email]",  with: "demo_developer@clientapp.com"
    fill_in "user[password]",  with: "password"
    click_button "Log in"
    expect(current_path).to eql("/user_developer_dashboard")
    expect(page).to have_content("Client Management")
    expect(page).to have_content("Subscribed Projects")

    # visit("http://localhost:3000/user_developer_dashboard")
    expect(page).to have_content("Client Management")
    expect(page).to have_content("Home")
    expect(page).to have_content("Project name")
    expect(page).to have_content("Description ")
    expect(page).to have_content("Service Provider")
    expect(page).to have_content("Developers")
    expect(page).to have_content("Status")
    expect(page).to have_content("Invoice status")
    expect(page).to have_content("Working hours")
    expect(page).to have_content("Starting date")
    expect(page).to have_content("Actions")

    find('.glyphicon-chevron-right').click
    expect(page).to have_content("Service Providers")
    expect(page).to have_content("Projects")
    expect(page).to have_content("Payment Details")

    click_link "Service Providers"
    expect(current_path).to eql("/serviceprovider_in_clientview")
    expect(page).to have_content("Client Management")
    expect(page).to have_content("Home")
    expect(page).to have_content("Projects")
    expect(page).to have_content("Generated Invoices")
    expect(page).to have_content("clients")
    expect(page).to have_content("List of Serviceprovider")

    find('.glyphicon-chevron-right').click
    expect(page).to have_content("Projects")
    expect(page).to have_content("Invoices")
    find('.glyphicon-chevron-left').click

    click_link "Home"
    expect(current_path).to eql("/user_developer_dashboard")
    find('.glyphicon-chevron-right').click

    click_link "Projects"
    expect(current_path).to eql("/projects")
    expect(page).to have_content("Invoice Payment")
    expect(page).to have_content("Home")
    expect(page).to have_content("Projects")
    expect(page).to have_content("Generated Invoices")
    expect(page).to have_content("clients")
    expect(page).to have_content("Projects")

    find('.glyphicon-chevron-right').click
    expect(page).to have_content("Clients")
    expect(page).to have_content("Projects")
    expect(page).to have_content("Invoices")
    find('.glyphicon-chevron-left').click

    click_link "Home"
    expect(current_path).to eql("/user_developer_dashboard")
    find('.glyphicon-chevron-right').click

    # click_link "Payment Details"

    find('.glyphicon-chevron-left').click

    find('span', class: 'glyphicon-user').click
    expect(current_path).to eql("/user_profile")
    expect(page).to have_content("USER PROFILE")
    expect(page).to have_content("Full name:")
    expect(page).to have_content("Email:")
    expect(page).to have_content("Role")

    click_link "Back"
    expect(current_path).to eql("/user_developer_dashboard")

    find('span', class: 'glyphicon-user').click

    click_link "Edit"
    # expect(current_path).to eql("/users/:id/edit")
    expect(page).to have_content("Edit")
    expect(page).to have_content("Upload profile photo")
    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password confirmation")

    click_link "Back"
    expect(current_path).to eql("/user_profile")

    click_link "Edit"
    attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    fill_in "user[first_name]", with: "Demo"
    fill_in "user[last_name]", with: "Developer"
    fill_in "user[email]", with: "demo_developer@clientapp.com"
    select("Developer", from: "user[role_id]").select_option
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"
    click_button "Update"
    # expect(current_path).to eql("/users/:id")

    #logout connection
    find('span', class: '_home_sign_out').click
    expect(current_path).to eql("/user/login")
  end
end
