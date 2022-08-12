const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/product");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", route);

const port = 3000;
mongoose
  .connect(
    "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    console.log("Connected");
    app.listen(port);
  });
