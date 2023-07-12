require "test_helper"

class GreetingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get greeting_index_url
    assert_response :success
  end
end
