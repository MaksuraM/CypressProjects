Feature: End to end Ecommerce Validation
    @Regression @smoke
    Scenario: Shwapno Block Notification & popup
    Given I open Shawpno Home Page
    When I Locate notification & Block notification
    Then I Locate popup & Block popup
    Then I check no popup is there
    
   