const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

// userSchema.statics.ourMethod = () => {
//   console.log("product");
// };

userSchema.method("ourMethod", () => {
  console.log("user");
});

module.exports = mongoose.model("User", userSchema);
