class Api::ListsController < ApplicationController

  before_action :require_login
  
  def show
    @list = List.find(params[:id])
    if @list
      render "api/lists/show"
    else
      render json: ["List not found"], status: 404
    end
  end

end
