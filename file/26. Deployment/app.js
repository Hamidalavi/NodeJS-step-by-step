const path = require("path");
const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@testcluster.xdext.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.cert");

app.set("view engine", "ejs");
app.set("views", "views");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(helmet());
app.use(compression());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("test", { title: "Deploy" });
});

app.post("/", (req, res, next) => {
  const name = req.body.name;
  console.log(name);
  res.redirect("/");
});

mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    console.log("Connected");
    https
      .createServer({ key: privateKey, cert: certificate }, app)
      .listen(process.env.PORT || 3000);
  });
