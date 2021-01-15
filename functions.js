const connection = require("./connection");

class Functions {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }

  employeeSearch() {
    this.connection.query("SELECT * FROM employee", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }

  employeeDeptSearch() {
    this.connection.query("SELECT * FROM employee GROUP BY role_id", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }

  employeeMangSearch() {
    this.connection.query("SELECT * FROM employee GROUP BY manager_id", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }

  addEmpSearch() {
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
            role_id: 50,
            manager_id: 2
          }]
        if (err) {
          console.log(err);
        } else {
          // Add string message of "added employee"
          console.log(result);

          runEmployeeData();
        }
      }));
    }


  removeEmpSearch() {
    this.connection.query("DELETE FROM employee WHERE ?", function (err, result) {
      [
        {
          first_name: "Test",
          last_name: "Test2"
        }
      ]
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");
      // Call runEmployeeData AFTER the DELETE completes
      runEmployeeData();
    });
  }

  updateEmpRoleSearch() {
    this.connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

      [
        {
          role_id: 20
        }
      ]
      if (err) {
        console.log(err);
      } else {
        // Add "Updated employee"
        console.table(result);
        runEmployeeData();
      }
    });
  }

  updateEmpMangSearch() {
    this.connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

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
        runEmployeeData();
      }
    });
  }


  rolesSearch() {
    this.connection.query("SELECT * FROM role", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }

  addRoleSearch() {
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
      .then(this.connection.query("INSERT INTO role SET ?", function (err, result) {
        [
          {
            role: this.role,
            salary: parseInt(this.salary),
            department_id: 50,

          }]
        if (err) {
          console.log(err);
        } else {
          // Add "Added role"
          console.log(result);
          runEmployeeData();
        }
      }));
  }



  removeRoleSearch() {
    this.connection.query("DELETE FROM role WHERE ?", function (err, result) {
      {
        name: "Example"
      }

      if (err) throw err;
      console.log(res.affectedRows + " role deleted!\n");
      // Call runEmployeeData AFTER the DELETE completes
      runEmployeeData();
    });
  }

  deptSearch() {
    this.connection.query("SELECT * FROM department", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }

  addDeptSearch() {
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
        runEmployeeData();
      }
    }));
  }


  removeDeptSearch() {
    this.connection.query("DELETE FROM department WHERE ?", function (err, result) {
      [{
        name: "Example2"
      }]
      if (err) throw err;
      console.log(res.affectedRows + " department deleted!\n");
      // Call runEmployeeData AFTER the DELETE completes
      runEmployeeData();
    }
    );
  }

  totalBudgetSearch() {
    this.connection.query("SELECT * FROM employee", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        runEmployeeData();
      }
    });
  }
}
module.exports = new Function(connection);