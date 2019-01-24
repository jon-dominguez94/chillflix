require 'test_helper'

class ListsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get lists_show_url
    assert_response :success
  end

end
