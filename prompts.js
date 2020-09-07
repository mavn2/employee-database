//Exports prompts as single object:
module.exports = {
  Main: [
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
}