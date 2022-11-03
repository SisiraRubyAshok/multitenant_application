json.extract! project, :id, :Project_name, :Client_name, :Developers, :Status, :Invoice_status, :Working_hours, :Starting_date, :user_id, :created_at, :updated_at
json.url project_url(project, format: :json)
