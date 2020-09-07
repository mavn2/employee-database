'use strict';

//Required modules
const inquirer = require('inquirer');

//Required files/folders
const db = require('./db');
const prompts = require('./prompts');
//require ('console.table');

//Runs cli on launch
mainPrompt();

//Calls 
async function mainPrompt() {
  const {choice} = await inquirer.prompt(prompts.Main)
  switch (choice){
   case 'v_employees':
      viewAllEmployees();
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



