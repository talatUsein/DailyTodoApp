package org.DailyTodo.step_definitions;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.DailyTodo.pages.MainPage;
import org.DailyTodo.pages.TaskCreationPage;
import org.DailyTodo.utilities.ConfigurationReader;
import org.DailyTodo.utilities.Driver;

import java.util.List;

public class TaskCreationStepDefinitions {

    MainPage mainPage = new MainPage();
    TaskCreationPage taskCreationPage = new TaskCreationPage();

    @Given("User is on the main page")
    public void user_is_on_the_main_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("User clicks Edit link")
    public void user_clicks_Edit_link() {
        mainPage.edit.click();
    }

    @When("User enters a following list in the Tasks for today input box")
    public void user_enters_a_following_list_in_the_Tasks_for_today_input_box(List<String>todoList) {
        taskCreationPage.textInputBox.clear();
    for (int i = 0; i <todoList.size(); i++) {
            taskCreationPage.textInputBox.sendKeys(todoList.get(i)+"\n");
        }

    }

    @When("User clicks the Save Tasks button")
    public void user_clicks_the_Save_Tasks_button() {
        taskCreationPage.saveTasksButton.click();
    }
    }
