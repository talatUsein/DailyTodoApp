package org.DailyTodo.pages;

import org.DailyTodo.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    public MainPage () {
        PageFactory.initElements(Driver.get(), this);
    }

@FindBy(linkText = "Edit")
public WebElement edit;


}
