Feature: Task creation

  Background:
    Given User is on the main page
    When User clicks Edit link
    And User enters a following list in the Tasks for today input box
      | 123                    |
      | Drink a glass of water |
      | Go jogging             |
      | Take a shower          |

  Scenario: User is able to create a daily task
    And User clicks the Save Tasks button
    Then User should be able to see a todo list

  Scenario: User is able to cancel a daily task creation
    And User clicks Cancel button
    Then User should be navigated to the main page

  Scenario: User is able to delete a daily tasks
    And User enters a following list in the Tasks for today input box
      | 123                    |
      | Drink a glass of water |
      | Go jogging             |
      | Take a shower          |
    And User deletes a todo list from the Tasks for today input box
    And User clicks the Save Tasks button
    Then daily tasks should be deleted

