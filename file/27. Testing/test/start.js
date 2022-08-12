const expect = require("chai").expect;
const mongoose = require("mongoose");

const User = require("../models/user");

describe("Connecting to DB", () => {
  before(done => {
    mongoose
      .connect(
        "mongodb//hamid:1yN49snBKxXgzued@testcluster.xdext.mongodb.net/shop?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true }
      )
      .then(() => {
        const user = new User({
          email: "test@gmail.com",
          password: "test",
          name: "Hamid",
          posts: [],
          _id: "5c0f66b979af55031b34728a"
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });
  it("should match with the our database data", () => {
    expect(user.email).equal("test@gmail.com");
    expect(user.password).equal("test");
    expect(user.name).equal("Hamid");
    expect(user._id).equal("5c0f66b979af55031b34728a");
  });
});
