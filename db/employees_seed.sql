USE employee_db;

-- Test department data
INSERT INTO departments (name)
VALUES ('Marketing'),('Development');

-- Test role data
INSERT INTO roles (title, salary, department_id)
VALUES ('Manager', 60000, 1),('Associate', 40000, 1),('INTERN', 0, 1), ('Lead', 60000, 2), ('Engineer', 45000, 2);

-- Test employee data
INSERT INTO employees (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1), ('Susan', 'Susan', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jack', 'Doe', 3, 1), ('Jane', 'Doe', 2, 1), ('Bill', 'Hicock', 5, 2), ('John', 'Wayne', 3, 2);

