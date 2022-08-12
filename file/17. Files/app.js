// const path = require("path");
// const express = require("express");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const Product = require("./product");

// const app = express();
// const URI =
//   "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority";
// const store = new MongoDBStore({
//   uri: URI,
//   collection: "sessions"
// });

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(
//   session({
//     secret: "my secret",
//     resave: false,
//     saveUninitialized: false,
//     store: store
//   })
// );

// mongoose
//   .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const fileStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "images");
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   }
// });

// const fileFilter = (req, file, callback) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     callback(null, true);
//   } else {
//     callback(null, false);
//   }
// };

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
// );
// app.use(express.static("public"));
// app.use("/images", express.static("images"));

// app.get("/", (req, res, next) => {
//   res.render("file", {
//     pageTitle: "File Upload",
//     product: ""
//   });
// });

// app.post("/show-product", (req, res, next) => {
//   const title = req.body.title;
//   Product.find({ title })
//     .then(found => {
//       console.log(found);
//       return res.redirect("/");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.post("/upload", (req, res, next) => {
//   const title = req.body.title;
//   const image = req.file;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product({
//     title,
//     imageUrl: image.path,
//     price,
//     description
//   });

//   product.save();
//   console.log("Added");
//   res.render("file", {
//     pageTitle: "File Download",
//     product
//   });
// });

// app.listen(3000);

// ---

const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const PDFDocument = require("pdfkit");
const Product = require("./product");

const app = express();
const URI =
  "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority";
const store = new MongoDBStore({
  uri: URI,
  collection: "sessions"
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res, next) => {
  res.render("file", {
    pageTitle: "File Upload",
    product: ""
  });
});

app.post("/upload", (req, res, next) => {
  const title = req.body.title;
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title,
    imageUrl: image.path,
    price,
    description
  });

  product.save();
  console.log("Added");

  const PDFDoc = new PDFDocument();
  PDFDoc.pipe(fs.createWriteStream(path.join(__dirname, "images", "test.pdf")));
  PDFDoc.text("Hello world", { underline: true });
  PDFDoc.end();
  fs.unlink(path.join(__dirname, "images", "JavaScript_Cert.png"), err => {
    console.log(err);
  });
  res.render("file", {
    pageTitle: "File Download",
    product
  });
});

app.listen(3000);
