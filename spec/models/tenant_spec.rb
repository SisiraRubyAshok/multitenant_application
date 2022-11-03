require 'rails_helper'

RSpec.describe Tenant, type: :model do
  context "valid Factory" do
    it "has a valid factory" do
      expect(build(:tenant)).to be_valid
    end
  end

  context "validations" do
    before { create(:tenant) }

    context "presence" do
      it { should validate_presence_of :subdomain }
      it { should validate_presence_of :name }
    end
  end
end
