const connection = require("./connection");

class Functions {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }
  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() {
    return this.connection.query(
      "SELECT * from employee;"
    );
  }

  employeeSearch() {
    console.log("In employee search");
    return this.connection.query("SELECT * FROM employee");
  }

  employeeDeptSearch() {
    return this.connection.query("SELECT * FROM employee GROUP BY roles_id", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        start();
      }
    });
  }

  employeeMangSearch() {
    return this.connection.query("SELECT * FROM employee GROUP BY manager_id", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        start();
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


  removeEmpSearch() {
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

  updateEmpRoleSearch() {
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

  updateEmpMangSearch() {
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


  rolesSearch() {
    return this.connection.query("SELECT * FROM roles", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        start();
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



  removeRoleSearch() {
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

  deptSearch() {
    return this.connection.query("SELECT * FROM department", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        start();
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
        start();
      }
    }));
  }


  removeDeptSearch() {
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

  totalBudgetSearch() {
    return this.connection.query("SELECT * FROM employee", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.table(result);
        start();
      }
    });
  }
}
module.exports = new Functions(connection);