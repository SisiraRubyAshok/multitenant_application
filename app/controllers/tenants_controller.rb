class TenantsController < ApplicationController


  around_action :scope_current_tenant, if: :find_subdomain
  # before_action :routes_solve
  before_action :find_subdomain

  def find_subdomain
    if request.subdomain.present?
      puts"======Subdomain====="+request.subdomain.inspect
      true
    end
  end

  def index
  end

  def show
    @tenant = Tenant.find(params[:id])
  end

  def new
    @tenant = Tenant.new
  end

  def create
    @tenant = Tenant.new(tenant_params)
    if @tenant.save
      ActiveRecord::Base.connection.schema_search_path = ["public"].join(",")
      @user = current_user
      redirect_to superadminhome_path
    else
      render :new
    end
  end

  def edit
    @tenant = Tenant.find(params[:id])
  end

  def update
    @tenant = Tenant.find(params[:id])

    if @tenant.update(tenant_params)
      redirect_to @tenant
    else
      render :edit
    end
  end

  def destroy

    @tenant = Tenant.find(params[:id])
      puts"======current_tenant====="+@tenant.inspect
    @tenant.destroy
    params[:id] = nil
    flash[:notice] = "tenant has been deleted"
    redirect_to superadminhome_path

    # redirect_to root_path
  end


  def routes_solve
    redirect_to new_user_session_url
  end

  def find_subdomain

    if request.subdomain.present?
      puts"======Subdomain====="+request.subdomain.inspect
      true
    end

  end

  private
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user

  def current_tenant

    @current_tenant ||= Tenant.find_by_subdomain!(request.subdomain)

    # puts"======current_tenant====="+@current_tenant.inspect
  end
    
  helper_method :current_tenant

  def scope_current_tenant(&block)

    puts"======current scope_tenant====="+current_tenant.inspect
    current_tenant.scope_schema("public", &block)

  end

  def tenant_params
      params.require(:tenant).permit(:subdomain, :name , :type)
    end

end
