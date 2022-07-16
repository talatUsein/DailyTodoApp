package org.DailyTodo.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions (
        plugin = {"json:target/cucumber.json" ,
                "html:target/default_html_reports",
                "rerun:target/rerun.txt"
        },
        features = "src/test/resources/features",
        glue = "org/DailyTodo/step_definitions",
        dryRun = false
)


public class testRunner {

}
