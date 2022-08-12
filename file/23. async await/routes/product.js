const express = require("express");
const productControoller = require("../controllers/product");

const router = express.Router();

router.get("/", productControoller.renderPage);
router.post("/", productControoller.findProduct);
router.post("/create", productControoller.createPost);

module.exports = router;
