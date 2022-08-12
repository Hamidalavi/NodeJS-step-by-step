// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs-step-by-step",
//   password: "********"
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize").Sequelize;
const sequelaize = new Sequelize("nodejs-step-by-step", "root", "********", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelaize;
