@Login
Feature: Login Site Toke Time

Scenario: Error on empty fields
    When I click on 'enter'
    Then field 'username' should be with error
    And field 'password' should be with error

Scenario: Wrong password
    When I type 'jimini@anderson.com' in 'email'
    And I type '123456' in 'password'
    And I click on 'enter'
    Then I should see 'E-mail or password is incorrect'

Scenario: Login successfully
    Given I have users to access the Toke Time website:
      | name              | email             	     | password |
      | Jimini Andersson  | jimini_anderson@msn.com  | jimini@123   |
    When I type 'jimini_anderson@msn.com' in 'email'
    And I type 'mudar@123' in 'password'
    And I click on 'Log in'
    Then I shouldn't see Access your account'



