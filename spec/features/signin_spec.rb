require 'rails_helper'

RSpec.describe "Sign in page", :js => true do
  it "displays the content of the sign in page" do
    # Login page without signup and forgot password
    visit("http://localhost:3000/user/login")

    expect(page).to have_content("LOG IN")
    expect(page).to have_content("Remember me")

    check('user[remember_me]')
    puts "waiting..."
    sleep 0.5
    uncheck('user[remember_me]')
    
    # Login page with signup and forgot password
    visit("http://techversant.lvh.me:3000/user/login") # "techversant" is a subdomain name

    expect(page).to have_content("LOG IN")
    expect(page).to have_content("Remember me")

    check('user[remember_me]')
    puts "waiting..."
    sleep 0.5
    uncheck('user[remember_me]')

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
    fill_in "user[email]", with: "superadmin@clientapp.com"
    click_button "Send me reset password instructions"

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
    fill_in "user[first_name]", with: "DEMO"
    fill_in "user[last_name]", with: "1"
    fill_in "user[email]", with: "demo_2@clientapp.com"
    select("Admin", from: "user[role_id]").select_option # To select role of the user
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"
    click_button "Sign up"

    #login page connection
    # expect(current_path).to eql("/user/login")
    fill_in "user[email]",  with: "superadmin@clientapp.com"
    fill_in "user[password]",  with: "super@123"
    click_button "Log in"
    expect(current_path).to eql("/superadminhome")
    expect(page).to have_content("Client Management")
    expect(page).to have_content("Tenants")

    #tenant in super admin
    click_link "Add Tenant"
    expect(current_path).to eql("/tenants/new")

    #back from tenant page 
    click_link "Back"
    expect(current_path).to eql("/superadminhome")

    #creating tenant in super admin
    click_link "Add Tenant"
    expect(current_path).to eql("/tenants/new")
    fill_in "tenant[subdomain]",  with: "techversantdemo"
    fill_in "tenant[name]",  with: "techversantdemo"
    click_button "Create Tenant"

    expect(current_path).to eql("/tenants")
    visit("http://localhost:3000/superadminhome")
    expect(current_path).to eql("/superadminhome")
    expect(page).to have_content("Tenant id")
    expect(page).to have_content("Subdomain")
    expect(page).to have_content("Actions")

    # View tenant details
    page.find(:xpath, "//a[@href='/tenants/7']").click
    expect(current_path).to eql("/tenants/7")
    expect(page).to have_content("Tenant id: 7")
    expect(page).to have_content("Subdomain: dfdsf")

    click_link "Back"
    expect(current_path).to eql("/superadminhome")

    page.find(:xpath, "//a[@href='/tenants/7']").click

    click_link "Edit"
    expect(current_path).to eql("/tenants/7/edit")
    expect(page).to have_content("Edit Project")
    expect(page).to have_content("Subdomain")
    expect(page).to have_content("Name")

    click_link "Back"
    expect(current_path).to eql("/superadminhome")

    page.find(:xpath, "//a[@href='/tenants/7']").click
    click_link "Edit"
    fill_in "tenant[subdomain]", with: "publicdomain"
    fill_in "tenant[name]", with: "publicdomain"
    click_button "Update Tenant"
    expect(current_path).to eql("/tenants/7")
    click_link "Back"

    # Edit tenant details
    page.find(:xpath, "//a[@href='/tenants/7/edit']").click
    expect(current_path).to eql("/tenants/7/edit")
    expect(page).to have_content("Edit Project")
    expect(page).to have_content("Subdomain")
    expect(page).to have_content("Name")

    click_link "Back"
    expect(current_path).to eql("/superadminhome")

    page.find(:xpath, "//a[@href='/tenants/7/edit']").click
    fill_in "tenant[subdomain]", with: "publicdomain"
    fill_in "tenant[name]", with: "publicdomain"
    click_button "Update Tenant"
    expect(current_path).to eql("/tenants/7")
    click_link "Back"

    # Delete tenant details
    page.find(:xpath, "//a[@href='/tenants/7/delete']").click
    expect(current_path).to eql("/superadminhome")

    # Logout connection
    find('span', class: '_home_sign_out').click
    expect(current_path).to eql("/user/login")

    # # login as user client
    # fill_in "user[email]",  with: "demo_client@abc.com"
    # fill_in "user[password]",  with: "password"
    # click_button "Log in"
    # expect(current_path).to eql("/user_client_home_dashboard")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Tenants")

    # # visit("http://localhost:3000/user_client_home_dashboard")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Subscribed Projects")
    # expect(page).to have_content("Active Projects")
    # expect(page).to have_content("Inactive  Projects")
    # expect(page).to have_content("Granularity Percentage")
    # expect(page).to have_content("Monthly Project Status")
    # expect(page).to have_content("Monthly Project Dotted Chart")

    # click_link "Home"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Service Providers")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Payment Details")

    # click_link "Service Providers"
    # expect(current_path).to eql("/serviceprovider_in_clientview")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("List of Serviceprovider")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_client_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(current_path).to eql("/projects")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Add Project")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Add Project"
    # expect(current_path).to eql("/client_new_project")
    # expect(page).to have_content("new Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")

    # click_link "Back"
    # expect(current_path).to eql("/projects")

    # click_link "Add Project"
    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # click_button "Create Project"
    # expect(current_path).to eql("projects/:id")
    # expect(page).to have_content("Test Project") # Project name as title
    # expect(page).to have_content("Project name: demo")
    # expect(page).to have_content("Client name: dfsaf")
    # expect(page).to have_content("Client email: dsfsd@asd.co")
    # expect(page).to have_content("Service Provider demo")
    # expect(page).to have_content("Developers: demo")
    # expect(page).to have_content("Status:")
    # expect(page).to have_content("Invoice status:")
    # expect(page).to have_content("Working hours: 8")
    # expect(page).to have_content("Starting date: 2021-07-21 11:38:00 UTC")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # click_link "Edit"
    # expect(current_path).to eql("/projects/1/edit")
    # expect(page).to have_content("Edit Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("User")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # fill_in "project[user_id]",  with: "8"
    # click_button "Update Project"
    # expect(current_path).to eql("projects/:id")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Invoice status")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("Actions")

    # click_link "Home"
    # expect(current_path).to eql("/user_client_home_dashboard")
    # find('.glyphicon-chevron-right').click
    # # click_link "Payment Details"

    # find('.glyphicon-chevron-left').click

    # find('span', class: 'glyphicon-user').click
    # expect(current_path).to eql("/user_profile")
    # expect(page).to have_content("USER PROFILE")
    # expect(page).to have_content("Full name:")
    # expect(page).to have_content("Email:")
    # expect(page).to have_content("Role")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # find('span', class: 'glyphicon-user').click

    # click_link "Edit"
    # # expect(current_path).to eql("/users/:id/edit")
    # expect(page).to have_content("Edit")
    # expect(page).to have_content("Upload profile photo")
    # expect(page).to have_content("Email")
    # expect(page).to have_content("Password")
    # expect(page).to have_content("Password confirmation")

    # click_link "Back"
    # expect(current_path).to eql("/user_profile")

    # click_link "Edit"
    # attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    # fill_in "user[first_name]", with: "DEMO"
    # fill_in "user[last_name]", with: "1"
    # fill_in "user[email]", with: "demo_1@clientapp.com"
    # select("Admin", from: "user[role_id]").select_option
    # fill_in "user[password]", with: "password"
    # fill_in "user[password_confirmation]", with: "password"
    # click_button "Update"
    # # expect(current_path).to eql("/users/:id")

    # #logout connection
    # find('span', class: '_home_sign_out').click
    # expect(current_path).to eql("/user/login")

    # # login as user admin
    # fill_in "user[email]",  with: "demo_admin@abc.com"
    # fill_in "user[password]",  with: "password"
    # click_button "Log in"
    # expect(current_path).to eql("/user_admin_home_dashboard")

    # # visit("http://techversant.lvh.me:3000/user_admin_home_dashboard")
    # # visit("http://localhost:3000/user_admin_home_dashboard")
    # expect(page).to have_content("Invoice Payment")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("service Providers")
    # expect(page).to have_content("Invoice Generated")
    # expect(page).to have_content("Pending Payment Count")
    # expect(page).to have_content("Payment Success Count")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Service Providers")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Payment Details")

    # click_link "Clients"
    # expect(current_path).to eql("/client_in_adminview")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("List of Clients")
    # expect(page).to have_content("Client Details")
    # expect(page).to have_content("List of Projects")
    # expect(page).to have_content("Service Provider")
    # expect(page).to have_content("Project Description")
    # expect(page).to have_content("Payment Status")
    # expect(page).to have_content("Payment Amount")
    # expect(page).to have_content("Payment Granularity")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Service Providers")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_admin_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # # click_link "Projects"

    # # click_link "Generated Invoices"

    # # click_link "clients"

    # click_link "Service Providers"
    # expect(current_path).to eql("/sp_in_adminview")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("List of Serviceprovider")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_admin_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(current_path).to eql("/projects")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Add Project")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Add Project"
    # expect(current_path).to eql("/client_new_project")
    # expect(page).to have_content("new Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")

    # click_link "Back"
    # expect(current_path).to eql("/projects")

    # click_link "Add Project"
    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # click_button "Create Project"
    # expect(current_path).to eql("projects/:id")
    # expect(page).to have_content("Test Project") # Project name as title
    # expect(page).to have_content("Project name: demo")
    # expect(page).to have_content("Client name: dfsaf")
    # expect(page).to have_content("Client email: dsfsd@asd.co")
    # expect(page).to have_content("Service Provider demo")
    # expect(page).to have_content("Developers: demo")
    # expect(page).to have_content("Status:")
    # expect(page).to have_content("Invoice status:")
    # expect(page).to have_content("Working hours: 8")
    # expect(page).to have_content("Starting date: 2021-07-21 11:38:00 UTC")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # click_link "Edit"
    # expect(current_path).to eql("/projects/1/edit")
    # expect(page).to have_content("Edit Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("User")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # fill_in "project[user_id]",  with: "8"
    # click_button "Update Project"
    # expect(current_path).to eql("projects/:id")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Invoice status")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("Actions")

    # click_link "Home"
    # expect(current_path).to eql("/user_admin_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # # click_link "Payment Details"

    # find('.glyphicon-chevron-left').click

    # find('span', class: 'glyphicon-user').click
    # expect(current_path).to eql("/user_profile")
    # expect(page).to have_content("USER PROFILE")
    # expect(page).to have_content("Full name:")
    # expect(page).to have_content("Email:")
    # expect(page).to have_content("Role")

    # click_link "Back"
    # expect(current_path).to eql("/user_admin_home_dashboard")

    # find('span', class: 'glyphicon-user').click

    # click_link "Edit"
    # # expect(current_path).to eql("/users/:id/edit")
    # expect(page).to have_content("Edit")
    # expect(page).to have_content("Upload profile photo")
    # expect(page).to have_content("Email")
    # expect(page).to have_content("Password")
    # expect(page).to have_content("Password confirmation")

    # click_link "Back"
    # expect(current_path).to eql("/user_profile")

    # click_link "Edit"
    # attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    # fill_in "user[first_name]", with: "DEMO"
    # fill_in "user[last_name]", with: "1"
    # fill_in "user[email]", with: "demo_1@clientapp.com"
    # select("Admin", from: "user[role_id]").select_option
    # fill_in "user[password]", with: "password"
    # fill_in "user[password_confirmation]", with: "password"
    # click_button "Update"
    # # expect(current_path).to eql("/users/:id")

    # # logout connection
    # find('span', class: '_home_sign_out').click
    # expect(current_path).to eql("/user/login")

    # #login as user developer
    # # fill_in "user[email]",  with: "demo_developer@abc.com"
    # # fill_in "user[password]",  with: "password"
    # # click_button "Log in"
    # # expect(current_path).to eql("/user_developer_dashboard")
    # # expect(page).to have_content("Client Management")
    # # expect(page).to have_content("Subscribed Projects")

    # # visit("http://localhost:3000/user_developer_dashboard")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description ")
    # expect(page).to have_content("Service Provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Invoice status")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("Actions")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Service Providers")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Payment Details")

    # click_link "Service Providers"
    # expect(current_path).to eql("/serviceprovider_in_clientview")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("List of Serviceprovider")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_developer_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(current_path).to eql("/projects")
    # expect(page).to have_content("Invoice Payment")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("Projects")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_developer_dashboard")
    # find('.glyphicon-chevron-right').click

    # # click_link "Payment Details"

    # find('.glyphicon-chevron-left').click

    # find('span', class: 'glyphicon-user').click
    # expect(current_path).to eql("/user_profile")
    # expect(page).to have_content("USER PROFILE")
    # expect(page).to have_content("Full name:")
    # expect(page).to have_content("Email:")
    # expect(page).to have_content("Role")

    # click_link "Back"
    # expect(current_path).to eql("/user_developer_dashboard")

    # find('span', class: 'glyphicon-user').click

    # click_link "Edit"
    # # expect(current_path).to eql("/users/:id/edit")
    # expect(page).to have_content("Edit")
    # expect(page).to have_content("Upload profile photo")
    # expect(page).to have_content("Email")
    # expect(page).to have_content("Password")
    # expect(page).to have_content("Password confirmation")

    # click_link "Back"
    # expect(current_path).to eql("/user_profile")

    # click_link "Edit"
    # attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    # fill_in "user[first_name]", with: "DEMO"
    # fill_in "user[last_name]", with: "1"
    # fill_in "user[email]", with: "demo_1@clientapp.com"
    # select("Admin", from: "user[role_id]").select_option
    # fill_in "user[password]", with: "password"
    # fill_in "user[password_confirmation]", with: "password"
    # click_button "Update"
    # # expect(current_path).to eql("/users/:id")

    # #logout connection
    # find('span', class: '_home_sign_out').click
    # expect(current_path).to eql("/user/login")

    # #login as user service provider
    # # fill_in "user[email]",  with: "demo_sp@abc.com"
    # # fill_in "user[password]",  with: "password"
    # # click_button "Log in"
    # # expect(current_path).to eql("/user_service_provider_home_dashboard")
    # # expect(page).to have_content("Client Management")
    # # expect(page).to have_content("Tenants")

    # # visit("http://localhost:3000/user_service_provider_home_dashboard")
    # expect(page).to have_content("Invoice Payment")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("service Providers")
    # expect(page).to have_content("Invoice Generated")
    # expect(page).to have_content("Monthly Billable Projects")
    # expect(page).to have_content("Weekly Billable Projects")
    # expect(page).to have_content("Yearly Billable Projects")
    # expect(page).to have_content("Client Detailes")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")

    # click_link "Clients"
    # expect(current_path).to eql("/client_view_in_sp")
    # expect(page).to have_content("Client Management")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("List of Clients")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_service_provider_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # click_link "Projects"
    # expect(current_path).to eql("/projects")
    # expect(page).to have_content("Invoice Payment")
    # expect(page).to have_content("Home")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Generated Invoices")
    # expect(page).to have_content("clients")
    # expect(page).to have_content("Projects")

    # find('.glyphicon-chevron-right').click
    # expect(page).to have_content("Clients")
    # expect(page).to have_content("Projects")
    # expect(page).to have_content("Invoices")
    # find('.glyphicon-chevron-left').click

    # click_link "Home"
    # expect(current_path).to eql("/user_service_provider_home_dashboard")
    # find('.glyphicon-chevron-right').click

    # # click_link "Invoices"

    # find('.glyphicon-chevron-left').click

    # find('span', class: 'glyphicon-user').click
    # expect(current_path).to eql("/user_profile")
    # expect(page).to have_content("USER PROFILE")
    # expect(page).to have_content("Full name:")
    # expect(page).to have_content("Email:")
    # expect(page).to have_content("Role")

    # click_link "Back"
    # expect(current_path).to eql("/user_service_provider_home_dashboard")

    # find('span', class: 'glyphicon-user').click

    # click_link "Edit"
    # # expect(current_path).to eql("/users/:id/edit")
    # expect(page).to have_content("Edit")
    # expect(page).to have_content("Upload profile photo")
    # expect(page).to have_content("Email")
    # expect(page).to have_content("Password")
    # expect(page).to have_content("Password confirmation")

    # click_link "Back"
    # expect(current_path).to eql("/user_profile")

    # click_link "Edit"
    # attach_file('user[avatar]', '/home/arunkumar/Downloads/mango.jpg', make_visible: true)
    # fill_in "user[first_name]", with: "DEMO"
    # fill_in "user[last_name]", with: "1"
    # fill_in "user[email]", with: "demo_1@clientapp.com"
    # select("Admin", from: "user[role_id]").select_option
    # fill_in "user[password]", with: "password"
    # fill_in "user[password_confirmation]", with: "password"
    # click_button "Update"
    # # expect(current_path).to eql("/users/:id")

    # #logout connection
    # find('span', class: '_home_sign_out').click
    # expect(current_path).to eql("/user/login")
    # page.find(:xpath, "//a[@href='/users/sign_out']").click

    # visit("http://cubettech.lvh.me:3000/user/login")

    # fill_in "user[email]",  with: "asdas@dsfsdf.co"
    # fill_in "user[password]",  with: "password"
    # click_button "Log in"

    # find('.glyphicon-chevron-right').click

    # click_link "Projects"

    # page.find(:xpath, "//a[@href='/projects/1']").click

    # # expect(current_path).to eql("/projects/:id")
    # expect(page).to have_content("demo") # Project name as title
    # expect(page).to have_content("Project name: demo")
    # expect(page).to have_content("Client name: dfsaf")
    # expect(page).to have_content("Client email: dsfsd@asd.co")
    # expect(page).to have_content("Service Provider demo")
    # expect(page).to have_content("Developers: demo")
    # expect(page).to have_content("Status:")
    # expect(page).to have_content("Invoice status:")
    # expect(page).to have_content("Working hours: 8")
    # expect(page).to have_content("Starting date: 2021-07-21 11:38:00 UTC")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # click_link "Edit"
    # expect(current_path).to eql("/projects/1/edit")
    # expect(page).to have_content("Edit Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("User")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Client_name]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Status]",  with: "Test"
    # fill_in "project[Invoice_status]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # fill_in "project[user_id]",  with: "8"
    # click_button "Update Project"
    # expect(current_path).to eql("projects/:id")

    # page.find(:xpath, "//a[@href='/projects/1/edit']").click
    # expect(current_path).to eql("/projects/:id/edit")
    # expect(page).to have_content("Edit Project")
    # expect(page).to have_content("Project name")
    # expect(page).to have_content("Description")
    # expect(page).to have_content("Service provider")
    # expect(page).to have_content("Client name")
    # expect(page).to have_content("Developers")
    # expect(page).to have_content("Status")
    # expect(page).to have_content("Invoice status")
    # expect(page).to have_content("Working hours")
    # expect(page).to have_content("Starting date")
    # expect(page).to have_content("User")

    # click_link "Back"
    # expect(current_path).to eql("/user_client_home_dashboard")

    # fill_in "project[Project_name]",  with: "Test Project"
    # fill_in "project[description]",  with: "Test"
    # fill_in "project[service_provider]",  with: "Test"
    # fill_in "project[Client_name]",  with: "Test"
    # fill_in "project[Developers]",  with: "Test"
    # fill_in "project[Status]",  with: "Test"
    # fill_in "project[Invoice_status]",  with: "Test"
    # fill_in "project[Working_hours]",  with: "8"
    # select("2021", from: "project[Starting_date(1i)]").select_option
    # select("July", from: "project[Starting_date(2i)]").select_option
    # select("21", from: "project[Starting_date(3i)]").select_option
    # select("11", from: "project[Starting_date(4i)]").select_option
    # select("38", from: "project[Starting_date(5i)]").select_option
    # fill_in "project[user_id]",  with: "8"
    # click_button "Update Project"
    # expect(current_path).to eql("projects/:id")

    # page.find(:xpath, "//a[@href='/projects/1/delete']").click
    # expect(current_path).to eql("projects")
  end
end
