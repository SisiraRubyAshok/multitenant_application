class User < ApplicationRecord
 # acts_as_tenant :account
	mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    
  has_many :projects

  validates_presence_of :email, :first_name, :last_name, :encrypted_password
  validates_uniqueness_of :email
     
  validates_integrity_of  :avatar
  validates_processing_of :avatar
         
  private
    def avatar_size_validation
      errors[:avatar] << "should be less than 500KB" if avatar.size > 0.5.megabytes
    end      

end
