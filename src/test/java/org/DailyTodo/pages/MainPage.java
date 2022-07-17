package org.DailyTodo.pages;

import org.DailyTodo.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class MainPage {

    public MainPage () {
        PageFactory.initElements(Driver.get(), this);
    }

@FindBy(linkText = "Edit")
public WebElement edit;

@FindBy(xpath = "(//tbody//tr//td[1])[1]")
public WebElement firstRowOfTodoList;

    public List<String> actualTodoList (int numOfTasks){
        List<String>list=new ArrayList<>();
        for (int i = 0; i < numOfTasks; i++) {
            list.add(Driver.get().findElement(By.xpath("(//tbody//tr//td[1])["+(i+1)+"]")).getText());
        }
        return list;
    }
}
