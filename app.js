'use strict';

//Required modules
const inquirer = require('inquirer');

//Required files/folders
const db = require('./db');
const prompts = require('./prompts');
const { addEmployee } = require('./db');
//require ('console.table');

//Runs cli on launch
mainPrompt();

//Displays main menu
async function mainPrompt() {
  //Awaits/selects user input from inquirer menu
  const {choice} = await inquirer.prompt(prompts.Main)

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
  const employee = await db.addEmployee();
  
  console.log('\n');
  console.log('Added to database!');

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

//Displays Employees and deletes selected
//async function deleteRole() {
  //const employees = await db.viewEmployees

//}

