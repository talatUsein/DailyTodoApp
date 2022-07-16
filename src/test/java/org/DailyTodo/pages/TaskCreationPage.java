package org.DailyTodo.pages;

import org.DailyTodo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TaskCreationPage {

    public TaskCreationPage () {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(tagName = "textarea")
    public WebElement textInputBox;

    @FindBy(xpath = "//p/input[@type='submit']")
    public WebElement saveTasksButton;

    @FindBy(linkText = "Cancel")
    public WebElement cancelButton;

}
