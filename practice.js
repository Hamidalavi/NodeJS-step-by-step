// import fs from "fs";
// const filesystem = require("fs");

// filesystem.writeFileSync("hamid.txt", "Hello persian sight");
// filesystem.readFileSync("hamid.txt", data => data.toString());

// -----------------------------------------------

// basics
// const name = "Hamid";
// console.log(name); // "Hamid"

// const array = [1, 2, 3];
// console.log(array); // [ 1, 2, 3 ]

// const object = { name: "Hamid", age: 23 };
// console.log(object); // { name: 'Hamid', age: 23 }

// const listOfData = ["Hamid", 23, { friend: "Hamed" }];
// console.log(listOfData) // [ 'Hamid', 23, { friend: 'Hamed' } ]

// const obj = {
//   name: "Hamid",
//   hobbies: ["Programming", "Reading Books", "Gaming"]
// };

// console.log(obj.hobbies); // [ 'Programming', 'Reading Books', 'Gaming' ]

// const obj2 = {
//   name: "Hamid",
//   printHello() {
//     console.log("Hello");
//   }
// };

// obj2.printHello(); // "Hello"

// -----------------------------------------------

// function
// const addOne = a => a + 1;
// console.log(addOne(2));

// function printName(name) {
//   console.log(name);
// }

// const printName = function (name) {
//   console, log(name);
// };

// const printName = name => {
//   console.log(name);
// };

// -----------------------------------------------

// destructuring
// const person = { name: "Hamid", age: 23 };

// const printName = ({ name }) => {
//   console.log(name);
// };

// printName(person); // "Hamid"

// const { name } = person;

// console.log(name); // "Hamid"

// const hobbies = ["Programming", "Reading", "Gaming"];

// const [hobby1, hobby2] = hobbies;

// console.log(hobby1, hobby2); // "Programming" "Reading"

// -----------------------------------------------

// sync and async code
// setTimeout(() => {
//   console.log("Timer is done!");
// }, 1);

// console.log("Hello");
// console.log("Hi");
// /*
// "Hello"
// "Hi"
// "Timer is done"
// */

// ---

// const fetchData = callback => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData(text => console.log(text));
// }, 2000);

// console.log("Hello");
// console.log("Hi");
// /*
//   "Hello"
//   "Hi"
//   "Timer is done!"
//   "Done!"
// */

// -----------------------------------------------

// HTTP
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   const url = request.url;
//   const method = request.method;

//   if (url === "/") {
//     response.write(`
//     <html lang="en">

// <head>
//     <title>Form</title>
// </head>

// <body>
//     <form method="POST" action="/message">
//         <input type="text">
//         <button type="submit">Send</button>
//     </form>
// </body>

// </html>
//     `);
//     return response.end();
//   }

//   if (url === "/message" && method === "POST") {
//     fs.writeFileSync("message.txt", "DUMMY");
//     response.statusCode = 302;
//     response.setHeader("Location", "/");
//     return response.end();
//   }
//   response.write(`
//   <html lang="en">

// <head>
//     <title>Document</title>
// </head>

// <body>
//     <h1>Hello world!</h1>
// </body>

// </html>
//   `);
//   response.end();
// });
// server.listen(3000);

// ---

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((request, response) => {
//   const url = request.url;
//   const method = request.method;

//   if (url === "/") {
//     response.write(`
//     <html>
// <head>
//     <title>Form</title>
// </head>

// <body>
//     <form method="POST" action="/message">
//         <input type="text" name="message">
//         <button type="submit">Send</button>
//     </form>
// </body>

// </html>
//     `);
//     return response.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     request.on("data", chunk => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return request.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFile("message.txt", message, err => {
//         console.log(err);
//         response.statusCode = 302;
//         response.setHeader("Location", "/");
//         return response.end();
//       });
//     });
//   }
//   response.setHeader("Content-Type", "text/html");
//   response.write(`
//   <html lang="en">

// <head>
//     <title>Document</title>
// </head>

// <body>
//     <h1>Hello world!</h1>
// </body>

// </html>
//   `);
//   response.end();
// });
// server.listen(3000);

// ---

// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log(request.method, request.url);
//   response.setHeader("Content-Type", "text/html");
//   response.write(`
//     <html>
// <head>
//     <title>Form</title>
// </head>

// <body>
//     <form method="POST">
//         <input type="text" name="message">
//         <button type="submit">Send</button>
//     </form>
// </body>

// </html>
//     `);
//   response.end();
// });

// server.listen(3000);

// -----------------------------------------------

// error
// const array = [1, 2, 3];
// array[0];

// const printaa = arr => arr;
// printaa(array[0]);

// -----------------------------------------------

// express
// const http = require("http");
// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//   res.send("<h1>Hello there</h1>");
//   next();
// });

// app.use((req, res, next) => {});

// const server = http.createServer(app);

// server.listen(3000);

// ---

// const express = require("express");
// const app = express();

// app.use("/add-product", (req, res, next) => {
//   res.send("<h1>Some product</h1>");
// });

// app.use((req, res, next) => {
//   res.send("<h1>Hello there</h1>");
// });

// app.listen(3000);

// ---

// const express = require("express");
// const parsedBody = require("body-parser");

// const app = express();

// app.use(parsedBody.urlencoded({extended: false}));

// app.use("/add-product", (req, res, next) => {
//   res.send(`
//   <form action="/product" method="POST">
//     <input type="text" name="title">
//     <button type="submit">Add product</button>
//   </form>
//   `);
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body); // { title: 'Toy' }
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello there</h1>");
// });

// app.listen(3000);

// ---

// req keyword => const packageName = require('packageName');

// -----------------------------------------------

// dynamic routes
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({extended: false}));

// app.get("/", (req, res, next) => {
//   res.redirect("/add-product");
// });

// app.get("/add-product", (req, res, next) => {
//   res.render("index", { prodTitle: "Hamid Alavi", price: 20.99 });
// });

// app.listen(3000);

// ---

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title><%= prodTitle %></title>
// </head>

// <body>
//     <form action="/my-product" method="POST">
//         <input type="text" name="name" placeholder="<%= price %>">
//         <input type="text" name="family">
//         <input type="submit" value="Send">
//     </form>
// </body>

// </html>

// -----------------------------------------------

// database
// database.js
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs-step-by-step",
//   password: "********"
// });

// module.exports = pool.promise();

// ===

// app.js
// const db = require("./database");

// db.execute("SELECT * FROM products");

// db.execute("SELECT * FROM products")
//   .then(([rows, fieldData]) => {
//     console.log(rows);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// -----------------------------------------------

// sequelize - create table
// database.js
// const Sequelize = require("sequelize").Sequelize;
// const sequelaize = new Sequelize("nodejs-step-by-step", "root", "********", {
//   dialect: "mysql",
//   host: "localhost"
// });

// module.exports = sequelaize;

// ===

// product.js
// const Sequelize = require("sequelize");
// const sequelize = require("./database");

// const Products = sequelize.define("product", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Products;

// ===

// app.js - create products table
// const sequelize = require("./database");
// require("./product");

// sequelize.sync();

// -----------------------------------------------

// sequelize - insert data
// const sequelize = require("./database");
// const Product = require("./product");

// function insertData() {
//   Product.create({
//     title: "A cyberpunk",
//     price: 45.99,
//     description: "CP",
//     imageUrl: "Cyber"
//   });
// }

// insertData();

// -----------------------------------------------

// sequelize - retrieve data
// const sequelize = require("./database");
// const Product = require("./product");

// function retrieveData() {
//   Product.findAll({ where: { id: 2 } });
// }

// retrieveData();

// -----------------------------------------------

// sequelize - delete data

// const sequelize = require("./database");
// const Product = require("./product");

// function deleteData() {
//   Product.destroy({ where: { id: 2 } });
// }

// deleteData();

// -----------------------------------------------

// sequelize - advanced delete data
// const sequelize = require("./database");
// const Product = require("./product");

// function deleteDataMore() {
//   id = 1; // we can make it dynamic
//   Product.findByPk(id).then(product => {
//     return product.destroy();
//   });
// }

// deleteDataMore();

// -----------------------------------------------

// sequelize - summary
// const sequelize = require("./database");
// const Product = require("./product");

// function createTable() {
//   // creates a database table
//   sequelize.sync();
// }

// function insertData() {
//   // inserts (data) row to database table
//   Product.create({
//     title: "A cyberpunk",
//     price: 45.99,
//     description: "CP",
//     imageUrl: "Cyber"
//   });
// }

// function retrieveData() {
//   // retrieves data from database table
//   Product.findAll({ where: { id: 2 } });
// }

// function deleteData() {
//   // removes data (rows) from database table
//   Product.destroy({ where: { id: 2 } });
// }

// function deleteDataMore() {
//   // removes data (rows) from database table by id
//   id = 1;
//   Product.findByPk(id).then(product => {
//     return product.destroy();
//   });
// }

// -----------------------------------------------

// send email
// const form = document.querySelector("form");

// const sendEmail = () => {
//   return Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "ultihamid@gmail.com",
//     Password: "53602F462E985C7FC5A9A3C3C289D81A800D",
//     To: "ultihamid@gmail.com",
//     From: "ultihamid@gmail.com",
//     Subject: "Persian Sight",
//     Body: "The best company"
//   }).then(message => alert(message));
// };

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   sendEmail();
// });

// -----------------------------------------------

// error handling
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2)); // 3
// console.log(sum(1)); // NaN

// const sum = (a, b) => {
//   if (a && b) {
//     return a + b;
//   }
//   throw Error("Invalid argument");
// };

// console.log(sum(1, 2)); // 3
// console.log(sum(1)); // Error: Invalid argument

// const sum = (a, b) => {
//   if (a && b) {
//     return a + b;
//   }
//   throw Error("Invalid argument");
// };

// try {
//   console.log(sum(1)); // "Invalid"
// } catch (error) {
//   console.log("Invalid");
// }

// console.log("I'm worked");
