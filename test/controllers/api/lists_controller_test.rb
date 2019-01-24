require 'test_helper'

class Api::ListsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_lists_show_url
    assert_response :success
  end

end
