package org.DailyTodo.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.DailyTodo.pages.MainPage;
import org.DailyTodo.pages.TaskCreationPage;
import org.junit.Assert;

public class TaskDeletionStepDefinitions {
    MainPage mainPage = new MainPage();
    TaskCreationPage taskCreationPage = new TaskCreationPage();

    @When("User deletes a todo list from the Tasks for today input box")
    public void user_deletes_a_todo_list_from_the_Tasks_for_today_input_box() {
       taskCreationPage.textInputBox.clear();
    }

    @Then("daily tasks should be deleted")
    public void daily_tasks_should_be_deleted() {
        Assert.assertFalse(mainPage.firstRowOfTodoList.isDisplayed());
    }


}
