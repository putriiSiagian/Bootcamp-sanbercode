Feature: Login Feature

  Scenario: Login with Valid Credentials
    Given I visit the URL
    And I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I Click the button Login
    Then I Verify Login Success
    Then I log out from the application

  Scenario: Login with Invalid Credentials
    Given I visit the URL
    When I enter invalid username and password
    Then I should see an error message
