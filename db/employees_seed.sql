USE employee_db;
-- Test department data
INSERT INTO department (name)
VALUES ('Marketing');
-- Test role data
INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 60000, 1);
-- Test employee data
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;