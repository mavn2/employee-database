//Retrieves password exported from local password.js file
const password = require('./password')

//Required NPM modules
const mysql = require('mysql');
const util = require('util')

//Creates connection 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'employee_db'
});

//Establishes connection, returns error if connection fails
connection.connect(err => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
  };
});

//Sets connection.query to use promises rather then callbacks
connection.query = util.promisify(connection.query);

//Exports the connection object
module.exports = connection
