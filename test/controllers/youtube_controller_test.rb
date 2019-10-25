require 'test_helper'

class YoutubeControllerTest < ActionDispatch::IntegrationTest
  test "should get inde" do
    get youtube_inde_url
    assert_response :success
  end

end
