require "application_responder"

class ApplicationController < ActionController::Base

  self.responder = ApplicationResponder
  respond_to :html,:js,:json

  protect_from_forgery
  
  def after_sign_in_path_for(resource)
       if resource.role_id == 1
         user_admin_dashboard_url
       elsif resource.role_id == 2
         user_client_home_dashboard_url 
       elsif resource.role_id == 3
         user_service_provider_home_dashboard_url
      elsif resource.role_id == 4
          superadminhome_url
        elsif resource.role_id == 5
          user_developer_dashboard_url
       end 
    end

   

    # before_action :configure_permitted_parameters, if: :devise_controller?

     protected

          def configure_permitted_parameters
               # devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password)}

               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :email, :password, :current_password, :avatar,:remove_avatar)}
          end

end
