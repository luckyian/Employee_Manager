const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const functions = require("./functions");
// const connection  = require("./connection");






function runEmployeeData() {
  console.log("Welcome to employee tracker")
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
      console.log("Answer?", answer.action)
      switch (answer.action) {
        case "View All Employees":
          functions.employeeSearch();
          // viewEmployees();
          break;

        case "View All Employees by Department":
          functions.employeeDeptSearch();
          break;

        case "View All Employees by Manager":
          functions.employeeMangSearch();
          break;

        case "Add Employee":
          functions.addEmpSearch();
          break;

        case "Remove Employee":
          functions.removeEmpSearch();
          break;

        case "Update Employee Role":
          functions.updateEmpRoleSearch();
          break;

        case "Update Employee Manager":
          functions.updateEmpMangSearch();
          break;

        case "View All Roles":
          functions.rolesSearch();
          break;

        case "Add Role":
          functions.addRoleSearch();
          break;

        case "Remove Role":
          functions.removeRoleSearch();
          break;

        case "View All Departments":
          functions.deptSearch();
          break;

        case "Add Department":
          functions.addDeptSearch();
          break;

        case "Remove Department":
          functions.removeDeptSearch();
          break;

        case "View Total Budget":
          functions.totalBudgetSearch();
          break;


      }
    });
}

runEmployeeData();
