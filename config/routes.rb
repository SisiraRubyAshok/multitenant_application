Rails.application.routes.draw do
  



   
 devise_for :user, controllers: { sessions: "devise/sessions", registrations: "devise/registrations" }, path_names: { sign_in: 'login', password: 'forgot', confirmation: 'confirm', unlock: 'unblock', sign_out: 'signout'}

 devise_scope :user do
   
    constraints subdomain: /[a-z0-9]/ do
      get '/', to: 'tenants#routes_solve'

    end

    # root 'devise/sessions#new' 
    root 'sample#routes_solve'  
    get '/user/signout' => 'devise/sessions#destroy', as: 'destroy_user_session_path'
    # get '/user/edit' => 'devise/registrations#edit', as: 'edit_user_registration_url'
    get'user_client_home_dashboard', to: 'users#user_client_home_dashboard', as: 'user_client_home_dashboard' 
    get'user_service_provider_home_dashboard', to: 'users#user_service_provider_home_dashboard', as: 'user_service_provider_home_dashboard'
    get'user_admin_home_dashboard', to: 'users#user_admin_home_dashboard', as: 'user_admin_dashboard'
    get'admin_new_project', to: 'projects#admin_new_project', as: 'admin_new_project'
    get'client_new_project', to: 'projects#client_new_project', as: 'client_new_project'
    get '/search', to:'projects#search' ,as: 'projects_search'
    get'client_project_view', to: 'projects#client_project_view', as: 'client_project_view'
    get'admin_project_view', to: 'projects#admin_project_view', as: 'admin_project_view'
    get'user_edit', to: 'users#edit', as: 'user_edit'
    get'user_update', to: 'users#update'
    get'user_profile', to: 'users#user_profile', as: 'user_profile_way'
    get'superadminhome', to:'users#superadminhome'
    delete 'tenants/:id/delete' => 'tenants#destroy', as: 'tenants_delete'
    get '/tenants/:id/delete' => 'tenants#destroy'
    get 'tenants/index'
    get 'tenants/new'
    get 'tenants/show'
    get 'tenants/edit'
    delete 'projects/:id/delete' => 'projects#destroy', as: 'projects_delete'
    get '/projects/:id/delete' => 'projects#destroy'
    get'sp_in_adminview', to: 'users#sp_in_adminview', as: 'sp_in_adminview'
    get'client_in_adminview', to: 'users#client_in_adminview', as: 'client_in_adminview'
    get'serviceprovider_in_clientview', to: 'users#serviceprovider_in_clientview', as: 'serviceprovider_in_clientview'
    get 'client_view_in_sp', to:'users#client_view_in_sp', as: 'client_view_in_sp'
    get 'user_developer_dashboard', to:'users#user_developer_dashboard'
    resources :projects

    resources :tenants
   
 end
  resources :users
 

  # get'admin_new_project', to: 'projects#admin_new_project', as: 'admin_new_project'
 	# get'client_new_project', to: 'projects#client_new_project', as: 'client_new_project'
 	# get '/search', to:'projects#search' ,as: 'projects_search'
 #The route for custom user sign_up *--not default rails route--*
 get'new_log_in', to: 'users#new_log_in', as: 'new_user_sign_up'
 

#The route for custom user sign_up *--not default rails route--*   
 get'new', to: 'users#log_in', as: 'new_user_log_in'

#custom route for after sign in path    
 get'home', to: 'users#home', as: 'user_home_way'
 # get'user_profile', to: 'users#user_profile', as: 'user_profile_way'
#cutom routes for user profile
 # get'user_profile', to: 'users#user_profile', as: 'user_profile_way'
 # get'user_client_home_dashboard', to: 'users#user_client_home_dashboard', as: 'user_client_home_dashboard' 
 # get'user_service_provider_home_dashboard', to: 'users#user_service_provider_home_dashboard', as: 'user_service_provider_home_dashboard'
 # get'user_admin_home_dashboard', to: 'users#user_admin_home_dashboard', as: 'user_admin_dashboard'
end
