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

  //Return list of employees
  viewEmployees() {
    return this.connection.query(
      'SELECT * FROM employees;'
    );
  }

  //Add employee
  //Update employee info
  //View employees by manager/update manager
  //Delete employee

  //Return list of roles
  viewRoles() {
    return this.connection.query(
      'SELECT * FROM roles;'
    );
  }

  //Add role
  //Delete role

  //Return list of departments
  viewDepartments() {
    return this.connection.query(
      'SELECT * FROM departments;'
    );
  }

  //Add department
  //Delete department
};

//Exports a new DB object created with the imported connection 
module.exports = new DB(connection)
