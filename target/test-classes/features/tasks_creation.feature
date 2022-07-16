Feature: Task creation

  Scenario: User is able to create a daily task
    Given User is on the main page
    When User clicks Edit link
    And User enters a following list in the Tasks for today input box
      | 123                    |
      | Drink a glass of water |
      | Go jogging             |
      | Take a shower          |
    And User clicks the Save Tasks button
    Then User should be able to see a todo list