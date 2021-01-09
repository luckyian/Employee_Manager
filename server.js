const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const functions = require("functions.js");


// const connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "employee-databaseDB"
// });

// connection.connect(function (err) {
//   if (err) throw err;
  runEmployeeData();
// });

function runEmployeeData() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Total Budget"


      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          functions.employeeSearch(connection);
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

        case "View All Roles":
          rolesSearch();
          break;

        case "Add Role":
          addRoleSearch();
          break;

        case "Remove Role":
          removeRoleSearch();
          break;

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


      }
    });
}


