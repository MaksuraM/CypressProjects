Feature: API Testing
    
    Application Regression 
    @Regression
    Scenario: API Testing
    Given I get user data
    When I validate the response status
    Then I ensure the first user has a "name" property
    
    @smoke
    Scenario: API Testing
    Given I get user data
    When I validate the response status
    Then I ensure the first user has a "name" property