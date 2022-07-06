Feature: auth user

background: given that user have a account on system

Scenario: Auth with sucess
When: When data validation is execute
Then: Return the user

Scenario: Auth user incorrect
When: When data validation is execute
Then: Return error(user incorrect)