require "rails_helper"

RSpec.describe Message, type: :model do
  describe "#create" do
    context 'can save' do

      it "contentがあり、imageが空白の場合" do
        expect(build(:message, image: nil)).to be_valid
      end

      it "contentが空白で、imageがある場合" do
        expect(build(:message, content: nil)).to be_valid
      end

      it "content,imageのどちらもある場合" do
        expect(build(:message)).to be_valid
      end
    end

    context "can't save" do

      it "content,imageのどちらもない場合" do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include('を入力してください')
      end

      it "group_idがない場合" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end

      it "user_idがない場合" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end

    end

  end
end
