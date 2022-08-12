const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.redirect("/add-product");
});

app.get("/add-product", (req, res, next) => {
  res.render("index", { prodTitle: "Hamid Alavi", price: 20.99 });
});

app.listen(3000);
