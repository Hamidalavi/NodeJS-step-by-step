const mongodb = require("mongodb").MongoClient;

let _db;

const mongoConnect = callback => {
  mongodb
    .connect(
      "mongodb+srv://hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority",
      { useUnifiedTopology: true }
    )
    .then(client => {
      console.log("Connected!");
      _db = client.db(); // getting database
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
