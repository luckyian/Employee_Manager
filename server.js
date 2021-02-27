const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const functions = require("./functions");
// const { prompt } = require("inquirer");
// const connection  = require("./connection");
// const mysql = require("mysql");
// const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",

  // My port; if not 3306
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "187onacop",
  database: "employee_databaseDB"
});
connection.connect(function(err){
  if (err) throw err;
  start();

});



function start() {
  console.log("Welcome to employee tracker");
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
     "Employee Menu",
     "Role Menu",
     "Department Menu"


    ]
  }).then(response => {
    let action = response.action;
    console.log(action);
    console.log("Answer?", action);
    switch (action) {
      case "Employee Menu":
        employee();
        // viewEmployees();
        break;

     

      case "Role Menu":
        role();
        break;


      case "Department Menu":
        department();
        break;

      // default:
      //   quit();
      //   break;

    }
    // Exit the application

  });

}
function employee() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees by Department",
      "View All Employees by Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager"
    ]
  }).then(response => {
    let action = response.action;
    console.log(action);
    console.log("Answer?", action);
    switch (action) {
      case "View All Employees":
        employeeSearch();
        // viewEmployees();
        break;

      case "View All Employees by Department":
        employeeDeptSearch();
        break;

      case "View All Employees by Manager":
        employeeMangSearch();
        break;

      case "Add Employee":
        addEmpSearch();
        break;

      case "Remove Employee":
        removeEmpSearch();
        break;

      case "Update Employee Role":
        updateEmpRoleSearch();
        break;

      case "Update Employee Manager":
        updateEmpMangSearch();
        break;
     
      // default:
      //   quit();
      //   break;
    }
  });
}
function role() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Roles",
      "Add Role",
      "Remove Role"
    ]
  }).then(response => {
    let action = response.action;
    console.log(action);
    console.log("Answer?", action);
    switch (action) {
      case "View All Roles":
        rolesSearch();
        break;

      case "Add Role":
        addRoleSearch();
        break;

      case "Remove Role":
        removeRoleSearch();
        break;

      default:
        quit();
        break;

    }
    

  });
}
function department(){
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "Add Department",
      "Remove Department",
      "View Total Budget"
    ]
  }).then(response => {
    let action = response.action;
    console.log(action);
    console.log("Answer?", action);
    switch (action) {
      case "View All Departments":
        deptSearch();
        break;

      case "Add Department":
        addDeptSearch();
        break;

      case "Remove Department":
        removeDeptSearch();
        break;

      case "View Total Budget":
        totalBudgetSearch();
        break;

      default:
        quit();
        break;

    }

  });

};
function findAllEmployees() {
  return this.connection.query(
    "SELECT * from employee;"
  );
};

function employeeSearch() {
  console.log("In employee search");
  return this.connection.query("SELECT * FROM employee");
}

function employeeDeptSearch() {
  return this.connection.query("SELECT * FROM employee GROUP BY roles_id", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      start();
    }
  });
}

function employeeMangSearch() {
  return this.connection.query("SELECT * FROM employee GROUP BY manager_id", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      start();
    }
  });
}

function addEmpSearch() {
  inquirer.prompt([
    {

      type: "input",
      message: "What is the employee's first name?",
      name: "first_name"

    },

    {

      type: "input",
      message: "What is the employee's last name?",
      name: "last_name"

    }


  ])
    .then(this.connection.query("INSERT INTO employee SET ?", function (err, result) {
      [

        {
          first_name: this.first_name,
          last_name: this.last_name,
          roles_id: 50,
          manager_id: 2
        }]
      if (err) {
        console.log(err);
      } else {
        // Add string message of "added employee"
        console.log(result);

        start();
      }
    }));
}


function removeEmpSearch() {
 return this.connection.query("DELETE FROM employee WHERE ?", function (err, result) {
    [
      {
        first_name: "Test",
        last_name: "Test2"
      }
    ]
    if (err) throw err;
    console.log(res.affectedRows + " employee deleted!\n");
    // Call start AFTER the DELETE completes
    start();
  });
}

function updateEmpRoleSearch() {
  return this.connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

    [
      {
        roles_id: 20
      }
    ]
    if (err) {
      console.log(err);
    } else {
      // Add "Updated employee"
      console.table(result);
      start();
    }
  });
}

function updateEmpMangSearch() {
  return this.connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

    [
      {
        manager_id: 2
      }
    ]
    if (err) {
      console.log(err);
    } else {
      // Add "Updated employee"
      console.log(result);
      start();
    }
  });
}


function rolesSearch() {
  return this.connection.query("SELECT * FROM roles", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      start();
    }
  });
}

function addRoleSearch() {
  inquirer.prompt([
    {

      type: "input",
      message: "What is the role's name?",
      name: "role"

    },

    {

      type: "input",
      message: "What is the role's salary?",
      name: "salary"

    }

  ])
    .then(this.connection.query("INSERT INTO roles SET ?", function (err, result) {
      [
        {
          title: this.role,
          salary: parseInt(this.salary),
          department_id: 50,

        }]
      if (err) {
        console.log(err);
      } else {
        // Add "Added role"
        console.log(result);
        start();
      }
    }));
}



function removeRoleSearch() {
  return this.connection.query("DELETE FROM roles WHERE ?", function (err, result) {
    {
      title: "Example"
    }

    if (err) throw err;
    console.log(res.affectedRows + " role deleted!\n");
    // Call start AFTER the DELETE completes
    start();
  });
}

function deptSearch() {
  return this.connection.query("SELECT * FROM department", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      start();
    }
  });
}

function addDeptSearch() {
  inquirer.prompt(
    [{

      type: "input",
      message: "What is the department's name?",
      name: "name"

    }
    ]
  ).then(this.connection.query("INSERT INTO department SET ?", function (err, result) {

    {
      name: "Rocky Road"

    }
    if (err) {
      console.log(err);
    } else {
      // Add "Added department"
      console.log(result);
      start();
    }
  }));
}


function removeDeptSearch() {
  return this.connection.query("DELETE FROM department WHERE ?", function (err, result) {
    [{
      name: "Example2"
    }]
    if (err) throw err;
    console.log(res.affectedRows + " department deleted!\n");
    // Call start AFTER the DELETE completes
    start();
  }
  );
}

function totalBudgetSearch() {
  return this.connection.query("SELECT * FROM employee", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      start();
    }
  });
}

// function quit() {
//   console.log("Goodbye!");
//   process.exit();
// }


