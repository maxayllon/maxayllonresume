class EmailsController < ApplicationController
  def create
    @email = Email.new(email_params)
    @email.save
    redirect_to root_path
  end

  private

  def email_params
    params.require(:email).permit(:name, :phone, :mail, :message)
  end
end
