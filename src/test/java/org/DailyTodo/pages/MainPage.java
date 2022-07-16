package org.DailyTodo.pages;

import org.openqa.selenium.support.PageFactory;

import java.sql.Driver;

public class MainPage {

    public MainPage () {
        PageFactory.initElements(Driver.get(), this);
    }

}
