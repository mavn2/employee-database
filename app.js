'use strict';

//Required modules
const inquirer = require('inquirer');

//Required files/folders
const db = require('./db');
const prompts = require('./prompts');
const { addEmployee } = require('./db');
const e = require('express');
//require ('console.table');

//Runs cli on launch
mainPrompt();

//Displays main menu
async function mainPrompt() {
  //Gets/stores user input from inquirer
  const {choice} = await inquirer.prompt(prompts.main)

  //Calls function based on user selection
  switch (choice){
   case 'v_employees':
      viewAllEmployees();
      break;
    case 'a_employees':
      addNewEmployee();
      break;
    case 'v_roles':
      viewAllRoles();
      break;
    case 'v_departments':
      viewAllDepartments()
      break;
    case 'a_departments':
      addNewDepartment();
  };
};

//Searches db, then displays all employees
async function viewAllEmployees() {
  const employees = await db.viewEmployees();

  console.log('\n')
  console.table(employees);

  mainPrompt();
};

//Creates employee based on user input
async function addNewEmployee(){
  //Gets relevant employee/role data
  const employeeList = await db.getEmployeeNames()
  const roles = await db.viewRoles();

  //Converts returned data for use with inquirer
  const roleData = await roles.map(
    element => {
      return element = {
        name: `${element.title}`,
        value: element.id
      };
    }
  );
  
  const employeeData = await employeeList.map( 
    element => {
      return element = {
        name: `${element.first_name} ${element.last_name}`,
        value: element.id
      }; 
    }
  );
  
  //Adds 'none' option for manager
  employeeData.unshift({name: 'None', value: null});

  //Passes converted data to function in prompts, gets/stores user input
  const {firstName, secondName, role, manager} = await inquirer.prompt(prompts.addEmployee(roleData, employeeData));

  //Creates employee with above values
  db.addEmployee(firstName, secondName, role, manager);

  mainPrompt();
};

//Searches db, then displays all roles
async function viewAllRoles() {
  const roles = await db.viewRoles();

  console.log('\n');
  console.table(roles);

  mainPrompt();
};

//Searches db, then displays all roles
async function viewAllDepartments() {
  const deps = await db.viewDepartments();

  console.log('\n');
  console.table(deps);

  mainPrompt();
};

//Adds new department based on user input
async function addNewDepartment() {
  const {name} = await inquirer.prompt(prompts.addDepartment);

  db.addDepartment(name);

  mainPrompt();
};


