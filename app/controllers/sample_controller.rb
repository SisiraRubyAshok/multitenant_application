class SampleController < ApplicationController
  
  
  def routes_solve
    ActiveRecord::Base.connection.schema_search_path = ["public"].join(",")
    redirect_to new_user_session_url

  end
  
end
