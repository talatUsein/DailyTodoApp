package org.DailyTodo.pages;

import org.DailyTodo.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    public MainPage () {
        PageFactory.initElements(Driver.get(), this);
    }



}
