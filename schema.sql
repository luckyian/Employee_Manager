DROP DATABASE IF EXISTS employee_databaseDB;
CREATE database employee_databaseDB;

USE employee_databaseDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DEC NOT NULL,
  department_id INT,
  CONSTRAINT fk_dep FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
  
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name  VARCHAR(30) NOT NULL,
  last_name  VARCHAR(30) NOT NULL,
  roles_id  INT NOT NULL,
  manager_id  INT,
  CONSTRAINT fk_role FOREIGN KEY (roles_id) REFERENCES roles (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
  
);