//Exports prompts as single object:
module.exports = {
  main: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        {
        name: 'View All Employees',
        value: 'v_employees'
        },
        {
          name: 'Add Employee',
          value: 'a_employees'
        },
        {
        name: 'View All Roles',
        value: 'v_roles'
        },
        {
        name: 'View All Departments',
        value: 'v_departments'
        }
      ]
    }
  ],

  addEmployee: function (roleData, employeeData){
    return [
      {
        type: 'input',
        name: 'firstName',
        message: `What is the employee's first name?`
      },
      {
        type: 'input',
        name: 'lastName',
        message: `What is the employee's last name?`
      },
      {
        type: 'list',
        message: `What is this employees role?`,
        name: 'role',
        choices: roleData
      },
      {
        type: 'list',
        message: `Who is this employee's manager?`,
        name: 'manager',
        choices: employeeData
      }
    ];
  },
  addDepartment:  [
    {
      type: 'input',
      message: `What is the department's name?`,
      name: 'name'
    }
  ],
  
};