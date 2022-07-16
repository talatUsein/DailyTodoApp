$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tasks_creation.feature");
formatter.feature({
  "name": "Task creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User is able to create a daily task",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Edit link",
  "keyword": "When "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_clicks_Edit_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a following list in the Tasks for today input box",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_enters_a_following_list_in_the_Tasks_for_today_input_box(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Save Tasks button",
  "keyword": "And "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_clicks_the_Save_Tasks_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see a todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_should_be_able_to_see_a_todo_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});