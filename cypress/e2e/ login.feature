Feature: Login

  Scenario: Successful login
    Given I access the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page