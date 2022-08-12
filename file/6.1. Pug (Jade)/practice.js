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