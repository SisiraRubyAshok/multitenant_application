class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
   @user= current_user
   if @user.role_id==1
    @projects=Project.all
  elsif @user.role_id==2
    @projects=Project.all.where(Client_name:current_user.first_name)
  else
    @projects =Project.all.where(service_provider:current_user.first_name)
  end
    respond_with(@projects)
  end

  def show
    @user=current_user
    respond_with(@project)
  end

  def new
     @user= current_user
    @project = Project.new
    respond_with(@project)
  end

  def edit
    @user=current_user
  end

  def create
    @user=current_user
    @project = Project.new(project_params)
    @project.save
    respond_with(@project)
    # redirect_to(:back) 
  end

  def update
    @project.update(project_params)
    respond_with(@project)
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    params[:id] = nil
    flash[:notice] = "Project has been deleted"
    redirect_to projects_path
    # respond_with(@project)
  end

  def client_new_project
      @project = Project.new
    respond_with(@project)
  end
  def client_project_view
    @user= current_user
    @projects = @user.projects.all
  end
  def admin_project_view
    @projects= Project.all
  end

  def admin_new_project
    @client_name=User.all.where(role_id: 2).pluck(:first_name)
    @project = Project.new
    respond_with(@project)
  end

  def autocomplete
    @user= current_user
      @parameter = params[:search]
      @results = @user.projects.all
   
  end

    def search
    if params[:search].present?  
      params[:search].strip!
      
      @user= current_user
      @parameter = params[:search].downcase  
      @results = Project.all.where("lower(description) LIKE :search" , search: @parameter) 
      # binding pry
      else
        respond_to do |format|
        format.html { redirect_to projects_path , notice: "No search found." }
       
      end 
    end
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def force_json
      request.format = :json
    end


    def project_params
      params.require(:project).permit(:Project_name, :Client_name, :Developers, :Status, :Invoice_status, :Working_hours, :Starting_date, :user_id, :description, :client_email, :service_provider, :search)
    end
end
