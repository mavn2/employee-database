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
          name: 'Add Role',
          value: 'a_roles'
        },
        {
          name: 'View All Departments',
          value: 'v_departments'
        },
        {
          name: 'Add Department',
          value: 'a_departments'
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

  addRole: function (departmentData) {
    return [
      {
        type: 'input',
        message: `What is this role's name?`,
        name: 'name'
      },
      {
        type: 'input',
        message: `What is this role's salary?`,
        name: 'salary',
        validate: value => {
          var valid = !isNaN(parseFloat(value));
          return valid || 'Please enter a number'
        },
        filter: value => {
          var res = ''
          for(i = 0; i < value.length; i++){
            if(!isNaN(Number(value[i]))){
              res += value.slice(i, i+1)
            };
          };
          return Number(res)
        },
      },
      {
        type: 'list',
        message: 'Which department does this role work in?',
        name: 'department',
        choices: departmentData
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