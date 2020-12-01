function employeeSearch() {
  connection.query("SELECT * FROM employee", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}

function employeeDeptSearch() {
  connection.query("SELECT * FROM employee GROUP BY role_id", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}

function employeeMangSearch() {
  connection.query("SELECT * FROM employee GROUP BY manager_id", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
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

    },


  ])
    .then(connection.query("INSERT INTO employee SET ?", function (err, result) {

      {
        first_name: this.first_name,
          last_name: this.last_name,
            role_id: 50,
              manager_id: 2
      }
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        runEmployeeData();
      }
    });
}

function removeEmpSearch() {
  connection.query("DELETE FROM employee WHERE ?", function (err, result) {
    {
      first_name: "Test",
        last_name: "Test2"
    }

    if (err) throw err;
    console.log(res.affectedRows + " employee deleted!\n");
    // Call runEmployeeData AFTER the DELETE completes
    runEmployeeData();
  }
  );
}

function updateEmpRoleSearch() {
  connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

    [
      {
        role_id: 20
      }
    ]
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}

function updateEmpMangSearch() {
  connection.query("UPDATE employee SET ? WHERE ?", function (err, result) {

    [
      {
        manager_id: 2
      }
    ]
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}


function rolesSearch() {
  connection.query("SELECT * FROM role", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}

function addRoleSearch() {
  inquirer.prompt(
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

  )
    .then(connection.query("INSERT INTO role SET ?", function (err, result) {

      {
        role: this.role,
        salary: parseInt(this.salary),
        department_id: 50,
     
    }
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        runEmployeeData();
      }
    });
}


function removeRoleSearch() {
  connection.query("DELETE FROM role WHERE ?", function (err, result) {
    {
      name: "Example"
    }

    if (err) throw err;
    console.log(res.affectedRows + " role deleted!\n");
    // Call runEmployeeData AFTER the DELETE completes
    runEmployeeData();
  }
  );
}

function deptSearch() {
  connection.query("SELECT * FROM department", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}

function addDeptSearch() {
  inquirer.prompt(
    {

      type: "input",
      message: "What is the department's name?",
      name: "name"

    },
  
   }).then(connection.query("INSERT INTO department SET ?", function (err, result) {

      {
        name: "Rocky Road"

      }
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        runEmployeeData();
      }
    });

}

function removeDeptSearch() {
  connection.query("DELETE FROM department WHERE ?", function (err, result) {
    {
      name: "Example2"
    }

    if (err) throw err;
    console.log(res.affectedRows + " department deleted!\n");
    // Call runEmployeeData AFTER the DELETE completes
    runEmployeeData();
  }
  );
}

function totalBudgetSearch() {
  connection.query("SELECT * FROM employee", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      runEmployeeData();
    }
  });
}