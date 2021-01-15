const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const functions = require("./functions");
const connection = require("./connection");


runEmployeeData();


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
          functions.employeeDeptSearch(connection);
          break;

        case "View All Employees by Manager":
          functions.employeeMangSearch(connection);
          break;

        case "Add Employee":
          functions.addEmpSearch(connection);
          break;

        case "Remove Employee":
          functions.removeEmpSearch(connection);
          break;

        case "Update Employee Role":
          functions.updateEmpRoleSearch(connection);
          break;

        case "Update Employee Manager":
          functions.updateEmpMangSearch(connection);
          break;

        case "View All Roles":
          functions.rolesSearch(connection);
          break;

        case "Add Role":
          functions.addRoleSearch(connection);
          break;

        case "Remove Role":
          functions.removeRoleSearch(connection);
          break;

        case "View All Departments":
          functions.deptSearch(connection);
          break;

        case "Add Department":
          functions.addDeptSearch(connection);
          break;

        case "Remove Department":
          functions.removeDeptSearch(connection);
          break;

        case "View Total Budget":
          functions.totalBudgetSearch(connection);
          break;


      }
    });
}


