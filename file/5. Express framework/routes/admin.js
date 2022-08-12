const path = require("path");
const rootDir = require("../util");
const express = require("express");

const router = express.Router();

// GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // e.g. { title: 'Toy' }
  res.redirect("/");
});

module.exports = router;
