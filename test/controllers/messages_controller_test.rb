require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get greeting' do
    get messages_greeting_url
    assert_response :success
  end
end
