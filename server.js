var orm = require("./config/orm.js");
var inquirer = require("inquirer");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Chose question",
      choices: ["findCityLat", "findRecordCityTempG", "findRecordCityTempL", "findTempForDateCity", "findAvgTempCity"],
      name: "question"
    }
    ]).then(function(inquirerResponse) {
    
    switch(inquirerResponse.question){
    	case "findCityLat":
    	inquirer.prompt([
    	{
    		type: "input",
    		message: "which city",
    		name: "city"
    	}
    		]).then(function(cityLatResponse)
    		{
    			orm.findCityLat(cityLatResponse.city);
    		});
    	
    	break;
    	case "findRecordCityTempG":
    	console.log("Performing RecordCityTempG function");
    	break;
    	case "findRecordCityTempL":
    	console.log("Performing RecordCityTempL function");
    	break;
    	case "findTempForDateCity":
    	console.log("FindingTempForDateCity");
    	break;
    	case "findAvgTempCity":
    	console.log("Finding city average temp");
    	break;
    }
  });


// // Find all the pets ordering by the lowest price to the highest price.
// orm.findCityLat("New York");

// // it actually trips up here, for some reason it things Threshold is supposed to be a column.  What?
// orm.findRecordCityTempG("New York", 24.0);

// orm.findRecordCityTempL("New York", 80.0);

// //this one says something about 1976 being a column.
// orm.findTempForDateCity("Chicago", '2019-12-31');

// orm.findAvgTempCity("Miami");