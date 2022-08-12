// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.set("view engine", "ejs"); // view engine
// app.set("views", "views"); // path

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res, next) => {
//   res.cookie("loggedIn", "nothing");
//   res.render("main");
// });

// app.get("/login", (req, res, next) => {
//   const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
//   console.log(isLoggedIn); // true or false
//   res.render("login", {
//     pageTitle: "Login",
//     isAuthenticated: isLoggedIn
//   });
// });

// app.post("/login", (req, res, next) => {
//   res.cookie("loggedIn", true, { httpOnly: true });
//   res.redirect("/login");
// });

// app.listen(3000);

// -----------------------------------------------

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const URI =
  "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority";
const app = express();
const store = new MongoDBStore({
  uri: URI,
  collection: "sessions"
});

app.set("view engine", "ejs"); // view engine
app.set("views", "views"); // path

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res, next) => {
  res.render("login", {
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn
  });
});

app.post("/login", (req, res, next) => {
  req.session.isLoggedIn = true;
  req.session.save(err => {
    console.log(err);
    res.redirect("/");
  });
});

// app.post("/logout", (req, res, next) => {
//   req.session.destroy();
//   res.redirect("/");
// });

app.post("/logout", (req, res, next) => {
  req.session.destroy(error => {
    console.log(error);
    res.redirect("/");
  });
});

app.listen(3000);
