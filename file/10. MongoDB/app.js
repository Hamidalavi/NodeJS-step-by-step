const mongoConnect = require("./database").mongoConnect;
const Product = require("./product");
const User = require("./users");

User.findById();

mongoConnect(client => {
  User.findById("123123123123");
});

// const product = new Product(
//   "JavaScript Complete Guide",
//   12.99,
//   "Persian Sight JS full guide",
//   "jfnfuineq"
// );

mongoConnect(client => {
  // product.save();
  // Product.fetchAll();
  // Product.findById("5fe0c04f99b5e44f5cea88d1");
  Product.deleteById("5fe0c098a838e44eb4924cd7");
});
