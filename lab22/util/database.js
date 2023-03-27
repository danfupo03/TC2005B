const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 8889,
  user: "root",
  database: "machines",
  password: "root",
});

module.exports = pool.promise();