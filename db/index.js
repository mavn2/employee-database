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
        `
      SELECT
        employees.first_name AS 'First Name',
        employees.last_name AS 'Last Name',
        roles.title AS Title,
        departments.name AS Department,
        CONCAT (
            B.first_name, 
            ' ', 
            B.last_name
        ) AS Manager
      FROM 
        employees
      LEFT JOIN
        roles 
        ON 
        employees.role_id = roles.id
      LEFT JOIN
        departments 
        ON 
        roles.department_id = departments.id
      LEFT JOIN
        employees B 
        On 
        employees.manager_id = B.id;
      `
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
  updateEmployeeRole(role, id){
      `
    UPDATE
      employees
    SET
      role_id = ${role}
    WHERE
      id = ${id} 
    `
  }
  //View employees by manager/update manager
  //Delete employee

  //Return formatted list of roles
  viewRoles(){
    return this.connection.query(
        `
      SELECT 
        roles.title AS Title,
        roles.salary AS Salary,
        departments.name AS Department
      FROM
        roles
      LEFT JOIN
        departments on roles.department_id = departments.id
      ORDER BY
        roles.department_id
      `
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
        `
      SELECT
        name, id
      FROM 
        departments
      ORDER BY
        id;
      `
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
