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

  //Return formatted list of employees
  viewEmployees() {
    return this.connection.query(
      'SELECT * FROM employees;'
    );
  }

  //Return Employee names and ids
  getEmployees() {
    return this.connection.query(
        `
      SELECT 
        first_name, last_name, id
      FROM
        employees
      `
    );
  }

  //Add employee
  addEmployee(first, second, role, manager) {
    return this.connection.query(
        `
      INSERT INTO employees 
        (first_name, last_name, role_id, manager_id)
      VALUES
        ('${first}', '${second}', ${role}, ${manager});
      `
    )
  }
  //Update employee role
  //View employees by manager/update manager
  //Delete employee

  //Return formatted list of roles
  viewRoles(){
    return this.connection.query(
      'SELECT * FROM roles;'
    );
  }

  //Return role names and ids
  getRoles() {
    return this.connection.query(
        `
      SELECT
        title, id
      FROM 
        roles;
      `
    );
  }

  //Add role
  addRole(title, salary, department) {
    return this.connection.query(
        `
      INSERT INTO roles
        (title, salary, department_id)
      VALUES
        ('${title}', ${salary}, ${department})
      `
    )
  }
  //Delete role

  //Return formatted list of departments
  viewDepartments() {
    return this.connection.query(
      'SELECT * FROM departments;'
    );
  }

  //Return department names and ids
  getDepartments() {
    return this.connection.query(
        `
      SELECT
        name, id
      FROM 
        departments;
      `
    );
  }

  //Add department
  addDepartment(name) {
    return this.connection.query(
        `
      INSERT INTO departments
        (name)
      VALUES
        ('${name}')
      `
    );
  }
  //Delete department
};

//Exports a new DB object created with the imported connection 
module.exports = new DB(connection)
