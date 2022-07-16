package org.DailyTodo.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.DailyTodo.pages.MainPage;
import org.DailyTodo.pages.TaskCreationPage;
import org.DailyTodo.utilities.ConfigurationReader;
import org.DailyTodo.utilities.Driver;

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
    @When("User types a todo list in the Tasks for today input box")
    public void user_types_a_todo_list_in_the_Tasks_for_today_input_box() {
        taskCreationPage.textInputBox.sendKeys("123\nDrink a glass of water\nGo jogging\nTake a shower");

    }
    @When("User clicks the Save Tasks button")
    public void user_clicks_the_Save_Tasks_button() {
        taskCreationPage.saveTasksButton.click();
    }
    @Then("User should be able to see a todo list")
    public void user_should_be_able_to_see_a_todo_list() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
