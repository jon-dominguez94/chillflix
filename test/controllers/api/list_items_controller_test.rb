require 'test_helper'

class Api::ListItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_list_items_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_list_items_delete_url
    assert_response :success
  end

  test "should get show" do
    get api_list_items_show_url
    assert_response :success
  end

end
