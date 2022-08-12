const Product = require("../models/product");

exports.renderPage = (req, res, next) => {
  res.render("async", { title: "async await" });
};

exports.findProduct = async (req, res, next) => {
  try {
    const find = await Product.find();
    await find;
    console.log(find);
  } catch (err) {
    return err;
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const product = new Product({
      title: "Hamid",
      price: 12.99,
      description: "Hamid Alavi is good"
    });
    await product.save();
  } catch (err) {
    console.log(err);
  }
};
