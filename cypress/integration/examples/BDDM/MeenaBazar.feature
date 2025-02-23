Feature: End to end Ecommerce Validation
    @Regression @smoke
    Scenario: MeenaBazar Location Select and Search
    Given I open MeenaBazar Home Page
    When I enter location and submit location
    Then I can search product

    
   