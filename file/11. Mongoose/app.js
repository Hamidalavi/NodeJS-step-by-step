const mongoose = require("mongoose");
const Product = require("./product");
const User = require("./user");

const product = new Product({
  title: "Shaiya",
  price: 12.99,
  description: "The Open World Game",
  imageUrl: "nothing"
});

mongoose
  .connect(
    "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

// product
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Product.find()
//   .then(products => {
//     console.log(products);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Product.findById("5fe362bc8f439119d48cde92")
//   .then(product => {
//     console.log(product);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Product.findById("5fe362bc8f439119d48cde92")
//   .then(product => {
//     product.title = "Call of Duty";
//     product.price = 15.99;
//     product.description = "Best FPS Game";
//     product.imageUrl = "nothing";
//     return product.save();
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Product.findByIdAndRemove("5fe363531847441c747c7f8a").then(result => {
//   console.log(result);
// });
const user = new User({
  username: "Hamidalavi6540"
});
user.ourMethod();
