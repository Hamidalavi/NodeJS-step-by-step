// const express = require("express");
// const bodyParser = require("body-parser");
// const { check } = require("express-validator");
// const { validationResult } = require("express-validator");
// const session = require("express-session");
// const flash = require("connect-flash");

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   session({ secret: "my secret", resave: false, saveUninitialized: false })
// );
// app.use(flash());

// app.get("/", (req, res, next) => {
//   let message = req.flash("error");
//   if (message.length > 0) {
//     message = message[0]; // first error
//   } else {
//     message = null;
//   }
//   res.render("validate", {
//     pageTitle: "Validate Page",
//     errorMessage: message
//   });
// });

// app.post(
//   "/validate",
//   check("email")
//     .isEmail()
//     .withMessage("Invalid email, please enter a correct one!")
//     .custom(value => {
//       if (value === "test@test.com") {
//         throw new Error("This email address is forbidden!");
//       }
//       return true;
//     }),
//   (req, res, next) => {
//     const error = validationResult(req);
//     if (!error.isEmpty()) {
//       console.log(error.array());
//       req.flash("error", "Invalid email");
//       return res.render("validate", {
//         pageTitle: "Validate Page",
//         errorMessage: error.array()[0].msg
//       });
//     }
//     res.send("Validation succeed");
//   }
// );

// app.listen(3000);

// ---

const express = require("express");
const bodyParser = require("body-parser");
const { check, body } = require("express-validator");
const { validationResult } = require("express-validator");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);
app.use(flash());

app.get("/", (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0]; // first error
  } else {
    message = null;
  }
  res.render("validate", {
    pageTitle: "Validate Page",
    errorMessage: message,
    validationErrors: []
  });
});

app.post(
  "/validate",
  [
    check("email")
      .isEmail()
      .withMessage("Invalid email, please enter a correct one!")
      .normalizeEmail(),
    body(
      "password",
      "Password should more than 5 characters and less that 10 characters. You can't use special characters"
    )
      .isLength({ min: 5, max: 10 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        }
        return true;
      })
  ],
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error.array());
      req.flash("error", "");
      return res.render("validate", {
        pageTitle: "Validate Page",
        errorMessage: error.array()[0].msg,
        validationErrors: error.array()
      });
    }
    res.send("Validation succeed");
  }
);

app.listen(3000);
