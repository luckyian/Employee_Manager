DROP DATABASE IF EXISTS employee-databaseDB;
CREATE database employee-databaseDB;

USE employee-databaseDB;

CREATE TABLE department (
  position INT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (position)
);

CREATE TABLE role (
  position INT NOT NULL,
  role VARCHAR(30),
  salary DEC,
  department_id INT NOT NULL,
  PRIMARY KEY (position)
);

CREATE TABLE employee (
  position INT NOT NULL,
  first_name  VARCHAR(30),
  last_name  VARCHAR(30),
  role_id  INT,
  manager_id  INT,
  PRIMARY KEY (position)
);