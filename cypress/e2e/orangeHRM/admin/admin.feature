Feature: Login and Access Admin Feature

  Scenario: Login with Valid Credentials and Access Admin Page
    Given I visit the URL
    When I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I Click the button Login
    Then I Verify Login Success
    Then I Click the Admin button
    Then I Verify Admin Page is displayed

  Scenario: Add a new user
    Given I visit the URL
    When I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I Click the button Login
    Then I Verify Login Success
    Then I Click the Admin button
    Then I Verify Admin Page is displayed
    When I click the Add button
    Then I should see the Add User form
    When I fill in the Add User form with valid data
    And I click the Save button
    Then I should see the newly added user in the list

  Scenario: Search for an existing user
    Given I visit the URL
    When I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I Click the button Login
    Then I Verify Login Success
    Then I Click the Admin button
    Then I Verify Admin Page is displayed
    When I enter a Username to search
    And I click the Search button
    Then I should see search results related to the Username

  Scenario: Reset the search form
    Given I visit the URL
    When I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I Click the button Login
    Then I Verify Login Success
    Then I Click the Admin button
    Then I Verify Admin Page is displayed
    When I fill in the Username field
    And I click the Reset button
    Then I should see the Username field is cleared
