$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tasks_creation.feature");
formatter.feature({
  "name": "Task creation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User is able to create a daily task",
  "description": "",
  "keyword": "Scenario"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User is able to cancel a daily task creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_clicks_Cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskCreationStepDefinitions.user_should_be_navigated_to_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User is able to delete a daily tasks",
  "description": "",
  "keyword": "Scenario"
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
  "name": "User deletes a todo list from the Tasks for today input box",
  "keyword": "And "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskDeletionStepDefinitions.user_deletes_a_todo_list_from_the_Tasks_for_today_input_box()"
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
  "name": "daily tasks should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "org.DailyTodo.step_definitions.TaskDeletionStepDefinitions.daily_tasks_should_be_deleted()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//tbody//tr//td[1])[1]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027WIN-UAJVPVPCN1I\u0027, ip: \u0027192.168.1.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4dfd85b8b6cc352798d996ba03af8782, findElement {using\u003dxpath, value\u003d(//tbody//tr//td[1])[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Knight\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65056}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65056/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4dfd85b8b6cc352798d996ba03af8782\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.isEnabled(Unknown Source)\r\n\tat org.DailyTodo.step_definitions.TaskDeletionStepDefinitions.daily_tasks_should_be_deleted(TaskDeletionStepDefinitions.java:20)\r\n\tat ✽.daily tasks should be deleted(file:///C:/Users/Knight/IdeaProjects/DailyTodo/src/test/resources/features/tasks_creation.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});