const getDb = require("./database").getDb;
const mongodb = require("mongodb");

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOperator;
    if (this._id) {
      // update
      dbOperator = db.collection("products").updateOne({
        _id: new mongodb.ObjectId(prodId),
        $set: this
      });
    } else {
      // add
      dbOperator = db.collection("products").insertOne(this);
    }
    return dbOperator
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    // select all
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => console.log(err));
  }

  static findById(prodId) {
    // select one
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: prodId })
      .next()
      .then(product => {
        console.log(product);
      })
      .catch(err => console.log(err));
  }

  static deleteById(prodId) {
    // delete one
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;
