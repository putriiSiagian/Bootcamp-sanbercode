Feature: Forgot Password Functionality

  Scenario: Reset password with a registered username
    Given I visit the login page
    When I click on the Forgot Password link
    Then I am redirected to the Forgot Password page
    When I enter my registered username
    And I click the Reset Password button
    Then I should see a success message indicating an email has been sent
