Feature: API Testing
 
    @Regression @smoke
    Scenario: Fetch data using GET method
    Given I get user data
    When I validate the GET response status
    Then I ensure the first user has a "name" property

    @Regression @smoke
    Scenario: Create data using POST method
    Given I post user data
    When I validate the POST response status
    Then I ensure the response contains the correct data I have created

    @Regression @smoke
    Scenario: Update data using PATCH method
    Given I update user data with PATCH
    When I validate the PATCH response status
    Then I ensure the PATCH response contains the updated data

    @Regression @smoke
    Scenario: Update data using PUT method
    Given I update user data with PUT
    When I validate the PUT response status
    Then I ensure the PUT response contains the updated data

    @Regression @smoke
    Scenario: Delete data using DELETE method
    Given I delete user data
    When I validate the DELETE response status
    Then I ensure the data is deleted successfully

    @Regression @smoke
    Scenario: Create data and fetch data
    Given I create user data
    When I fetch user data
    Then I ensure the response contains the correct data

    @Regression @smoke
    Scenario: Create and fetch mock data
    Given I create mock data
    When I hit Mock Server
    Then I ensure the response contains the mock data