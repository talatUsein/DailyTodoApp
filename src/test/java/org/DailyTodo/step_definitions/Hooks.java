package org.DailyTodo.step_definitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.DailyTodo.utilities.Driver;

public class Hooks {

    @Before
    public void setUp(){
        Driver.get().manage().window().maximize();
    }

    @After
    public void tearDown(){
       // Driver.closeDriver();
    }

}
