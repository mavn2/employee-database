'use strict';

//Imports connection object
const connection = require('./connection')

//Create D(ata)B(ase) class for easy access to queries from other code
class DB {
  constructor(connection){
    //Sets connection key equal to imported connection object
    this.connection = connection;
  }

  //DB queries encased in functions, to be called as methods on DB object
  //Returns list of employees
  viewEmployees() {
    return this.connection.query(
      'SELECT * FROM employees;'
    );
  }

  viewRoles() {
    return this.connection.query(
      'SELECT * FROM roles;'
    );
  }

  viewDepartments() {
    return this.connection.query(
      'SELECT * FROM departments;'
    );
  }
};

//Exports a new DB object created with the imported connection 
module.exports = new DB(connection)
