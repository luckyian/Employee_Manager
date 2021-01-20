const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",

  // My port; if not 3306
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "187onacop",
  database: "employee-databaseDB"
});
connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;

