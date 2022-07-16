Feature: Task creation

  Scenario: User is able to create a daily task
    Given User is on the main page
    When User clicks Edit link
    And User types a todo list in the Tasks for today input box
    And User clicks the Save Tasks button
    Then User should be able to see a todo list