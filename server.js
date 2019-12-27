var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.findCityLat(city);

orm.findRecordCityTempGreater(city, temp);

orm.findRecordCityTempLess(city, temp);

orm.findTempforDateInCity(city, date);

orm.findAvgTemp(city);