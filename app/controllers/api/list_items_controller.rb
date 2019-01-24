class Api::ListItemsController < ApplicationController

  before_action :require_login

  def create
    @list_item = ListItem.new(list_item_params)
    @list_item.list_id = current_user.list_id
    if @list_item.save
      render "api/list_items/show"
    else
      render json: @list_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @list_item = ListItem.find(params[:id])
    @list_item.destroy
  end

  def show
    @list_item = ListItem.find(params[:id])
    render "api/list_items/show"
  end

  def list_item_params
    params.require(:list_item).permit(:movie_id)
  end
end
