const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const functions = require("./functions");
// const { prompt } = require("inquirer");
const connection = require("./connection");






function start() {
  console.log("Welcome to employee tracker");
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Employee Menu",
      "Role Menu",
      "Departments Menu"


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

      case "Departments Menu":
        department();
        break;


      default:
        quit();
        break;

    }
    

  });

}
function employee() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",

      "Add Employee",

      "Update Employee Role"

    ]
  }).then(response => {
    let action = response.action;
    console.log(action);
    console.log("Answer?", action);
    switch (action) {
      case "View All Employees":
        findAllEmployees();
       
        break;


      case "Add Employee":
        addEmpSearch();
        break;

      case "Update Employee Role":
        updateEmpRoleSearch();
        break;



      default:
        quit();
        break;
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
      "Add Role"

    ]
  }).then((response) => {
    console.log("Answer?", response.action);
    switch (response.action) {
      case "View All Roles":
        rolesSearch();
        break;

      case "Add Role":
        addRoleSearch();
        break;


      default:
        quit();
        break;

    }


  });
}
function department() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "Add Department"
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



      default:
        quit();
        break;
    }
  });
}
function findAllEmployees() {
  connection.query(
    "SELECT * from employee", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      start();
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

    },
    {

      type: "list",
      message: "What is the role of the employee?",
      choices: [1, 2, 3, 4],
      name: "roles_id"
    },
    {

      type: "list",
      message: "Who is the employee's manager?",
      choices: [1, 2, 3, 4],
      name: "manager_id"

    },



  ])
    .then(function (results) {
      connection.query("INSERT INTO employee SET ?",


        {
          first_name: results.first_name,
          last_name: results.last_name,
          roles_id: results.roles_id,
          manager_id: results.manager_id
        }
      );

      // Add string message of "added employee"
      console.table(results)


      start();

    });
}




function updateEmpRoleSearch() {

  connection.query('SELECT * FROM employee', function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "update",
      type: "rawlist",
      message: "Which employee do you want to update?",
      choices: function () {
        let updateEmployee = [];
        for (var i = 0; i < res.length; i++) {
          updateEmployee.push(`${res[i].id} ${res[i].first_name}`);
        }
        return updateEmployee
      },
    }
    ]).then(results)
    let employee = results.update.split(' ')
    inquirer.prompt(
      {

        type: "list",
        message: "What is the new role of the employee?",
        choices: [1, 2, 3, 4],
        name: "roles_id"
      })
      .then(function (results) {

        connection.query("UPDATE employee SET ? WHERE ? ", employee, roles_id);
        console.table(res);
        console.log("Employee was updated")

        start();
      });

  });
}




function rolesSearch() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
}


function addRoleSearch() {
  inquirer.prompt([
    {

      type: "input",
      message: "What is the role's name?",
      name: "roles"

    },

    {

      type: "input",
      message: "What is the role's salary?",
      name: "salary"

    },

    {

      type: "list",
      message: "What is the new departemnt of the employee?",
      choices: [1, 2, 3, 4],
      name: "department_id"
    }

  ])
    .then(function (results) {


      connection.query("INSERT INTO roles SET ?", 
        
          {
            title: results.roles,
            salary: parseInt(results.salary),
            department_id: results.department_id,

          }
      );
          // Add "Added role"
          console.log(results);
          start();
        
        });
    
    
}





function deptSearch() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
}

function addDeptSearch() {
  inquirer.prompt(
    [{

      type: "input",
      message: "What is the department's name?",
      name: "title"

    }
    ]
  ).then(function (result) {
    (this.connection.query("INSERT INTO department SET ?", function (err, result) {

      {
        title: this.title

      }
      if (err) {
        console.log(err);
      } else {
        // Add "Added department"
        console.log(result);
        start();
      }

    }));
  })
}



function quit() {
  console.log("Goodbye!");
  process.exit();
}

start();
