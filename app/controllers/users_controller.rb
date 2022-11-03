class UsersController < ApplicationController
 
 respond_to :html,:js,:json
 
 def index
   @user=current_user
   puts"======current_user====="+@current_user.inspect  
 end
  
 def show
   @user = User.new
 end
  
 def edit
  # binding pry
  if params[:id].present? 
    temp = params[:id]
    @user = User.find(temp)
  else 
    @user =current_user
  end
 end
  
 def create
   @user = User.new(user_params)
   if @user.save
    redirect_to new_user_session_url
   else 
    redirect_to new_user_registration_url
   end 
     
 end
  
 def update
  if params[:id].present? 
    temp = params[:id]
    @user = User.find(temp)
  else
    @user=current_user
  end
    @user.update(user_params)
    if @user.save
      sign_in(current_user, :bypass => true)
      if @user==current_user
        puts"======current_user====="+@user.inspect
        redirect_to user_profile_way_url(@user)
      else
        redirect_to user_admin_dashboard_url
      end
    # respond_with(@user)
    # redirect_to user_profile_way_url
  end
end

 def destroy
    
 end
 
 def home
   
 end
 
 def user_client_home_dashboard
   @current_user = current_user
   puts"======current_user====="+@current_user.inspect
 end
  
 def user_service_provider_home_dashboard
   @current_user = current_user
   puts"======current_user====="+@current_user.inspect
 end 
 
 def user_admin_dash_board_url
   @user=current_user
   
 end
 
 def superadminhome
   @user=current_user
      @tenants=Tenant.all
   puts"======Tenants====="+@tenants.inspect
 end

 def sp_in_adminview
  @user=current_user
  # if @user.role_id==1
    @sp= User.all.where(role_id:3)
    @projects =Project.all
     puts"======Service provider====="+@sp.inspect
  # else
  end

  def client_view_in_sp

    @user=current_user
    @clients = User.all.where(role_id:2)
    @projects = Project.all.where(service_provider:@user.first_name)
    
  end

  def client_in_adminview
   @user=current_user
   @clients = User.all.where(role_id:2)
   @projects = Project.all
  end
 

  def serviceprovider_in_clientview
    @user = current_user
    @serviceprovider = User.all.where(role_id:3)
    @projects = Project.all.where(Client_name: @user.first_name)

  end

 def user_profile
   puts"======current_user====="+@current_user.inspect
  # binding pry
 @user=current_user
 end

 def user_developer_dashboard
  @user = current_user
  @projects = Project.all.where(Developers: @user.first_name)
 end

 private 
  
  def user_params
    params.require(:user).permit(:name,:email,:first_name,:role_id,:last_name,:password,:password_confirmation,:encrypted_password,:avatar, :avatar_cache, :remove_avatar,:search)
  end

end
