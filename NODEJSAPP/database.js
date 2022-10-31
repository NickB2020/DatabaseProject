var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "programming_tutorial_youtube"
  });

connection.connect(function(error) {
  if (error) throw error;
  console.log('Database is connected successfully !');
});

module.exports = connection;