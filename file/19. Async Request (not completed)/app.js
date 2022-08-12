const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mogoose = require("mongoose");
const Product = require("./product");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

mogoose
  .connect(
    "mongodb//hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(conncted => {
    console.log("Connected");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  Product.find().then(product => {
    let _id;
    let title;
    let price;
    for (prod of product) {
      _id = prod._id;
      title = prod.title;
      price = prod.price;
    }
    res.render("async", { _id });
  });
});

app.post("/", (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product({
    title,
    price,
    description
  });
  product.save().then(result => {
    res.redirect("/");
  });
});

app.listen(3000);
