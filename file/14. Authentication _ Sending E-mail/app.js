const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const csrf = require("csurf");
const flash = require("connect-flash");
const User = require("./user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // parse the content

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(flash());

const URI =
  "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const csrfProtection = csrf();

app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.get("/", (req, res, next) => {
  res.render("main", { pageTitle: "Main" });
});

app.get("/signup", (req, res, next) => {
  res.render("signup", { pageTitle: "Sign Up" });
});

app.get("/login", (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("login", {
    pageTitle: "Login Now",
    errorMessage: message
  });
});

app.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        // if the email exists, then...
        return res.redirect("/signup"); // because the same email address can't signup again
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            confirmPassword: hashedPassword
          });
          return user.save();
        })
        .then(result => {
          res.redirect("/login");
        });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(haveUser => {
      if (!haveUser) {
        req.flash("error", "Invalid email or password");
        return res.redirect("/login");
      }
      bcrypt
        .compare(password, haveUser.password)
        .then(doMatch => {
          if (doMatch) {
            res.redirect("/");
            console.log(doMatch);
          } else {
            res.redirect("/login");
          }
        })
        .catch(err => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch();
});

app.listen(3000);
