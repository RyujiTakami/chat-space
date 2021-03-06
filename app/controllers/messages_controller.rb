class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @members = @group.users
    respond_to do |format|
      format.html
      format.json {@new_message = Message.where("id > ?", params[:message][:id])}
    end
  end

  def create
    @message = @group.messages.new(message_params)
    respond_to do |format|
      if @message.save
        format.html {redirect_to group_messages_path(@group), notice: "メッセージが送信されました"}
        format.json
      else
        @messages = @group.messages.includes(:user)
        flash.now[:alert] = "メッセージを入力してください"
        render :index , notice: "メッセージ作成に失敗しました"
      end
    end
  end

  private
  def message_params
    @message = params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
