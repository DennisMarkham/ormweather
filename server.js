var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.findCityLat("New York");

// it actually trips up here, for some reason it things Threshold is supposed to be a column.  What?
orm.findRecordCityTempG("New York", 24.0);

orm.findRecordCityTempL("New York", 80.0);

//this one says something about 1976 being a column.
orm.findTempForDateCity("Chicago", 2019-12-31);

orm.findAvgTempCity("Miami");