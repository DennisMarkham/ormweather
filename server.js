var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.findCityLat("New York");

orm.findRecordCityTempG("New York", 24.0);

orm.findRecordCityTempL("New York", 80.0);

orm.findTempForDateCity("Chicago", "2019-12-31");

orm.findAvgTempCity("Miami");