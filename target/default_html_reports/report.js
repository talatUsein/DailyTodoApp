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
formatter.step({
  "name": "User is on the main page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks Edit link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User types a todo list in the Tasks for today input box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks the Save Tasks button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see a todo list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});