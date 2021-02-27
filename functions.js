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
      .then(this.connection.query("INSERT INTO employee SET ?", function (err, result) {
        [

          {
            first_name: this.first_name,
            last_name: this.last_name,
            roles_id: this.roles_id,
            manager_id: this.manager_id
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


  

  updateEmpRoleSearch() {
    return this.connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

      [
        {
          roles_id: this.roles_id
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
        name: "roles"

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
            title: this.roles,
            salary: parseInt(this.salary),
            department_id: this.department_id,

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



  
}
module.exports = new Functions(connection);