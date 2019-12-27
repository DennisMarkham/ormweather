var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  findCityLat: function(city) {
    var queryString = "SELECT lat FROM records WHERE city = ?";
    connection.query(queryString, [city], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findRecordCityTempG: function(city, threshold) {
    var queryString = "SELECT * FROM records WHERE city = ? AND temp > ?";
    console.log(queryString);
    connection.query(queryString, [city, threshold], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
 findRecordCityTempL: function(city, threshold) {
    var queryString = "SELECT * FROM records WHERE city = ? AND temp < ?";
    console.log(queryString);
    connection.query(queryString, [city, threshold], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findTempForDateCity: function(city, date) {
    var queryString = "SELECT temp FROM records WHERE city = ? AND dayt = ?";
    console.log(queryString);
    connection.query(queryString, [city, date], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},
findAvgTempCity: function(city) {
    var queryString = "SELECT AVG(temp) FROM records WHERE city = ?";
    console.log(queryString);
    connection.query(queryString, [city], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
}
};

module.exports = orm;
