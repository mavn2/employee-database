//Set up db connection

//Retrieves password exported from local password.js file
const password = require('./password')

//Required NPM module
const mysql = require('mysql');

//Creates connection 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'employee_db'
});

//Connection test code executes if this file is run
connection.connect(err => {
  if (err){
    console.error(`Error connecting: ${err.stack}`);
    return;
  };
  console.log(`Connected on ${connection.threadId}`);
});

module.exports = connection
