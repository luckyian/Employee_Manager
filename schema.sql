DROP DATABASE IF EXISTS employee_databaseDB;
CREATE database employee_databaseDB;

USE employee_databaseDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DEC NOT NULL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name  VARCHAR(30) NOT NULL,
  last_name  VARCHAR(30) NOT NULL,
  role_id  INT NOT NULL,
  manager_id  INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles,
  FOREIGN KEY (manager_id) REFERENCES employees
);