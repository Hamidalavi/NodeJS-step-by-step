// module.exports = {
//   hello() {
//     return { text: "Hello Persian Sight", number: 12345 };
//   }
// };

const bcrypt = require("bcryptjs");

const User = require("../models/user");

module.exports = {
  createUser: async ({ userInput }, req) => {
    //   const email = args.userInput.email;
    const existingUser = await User.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error("User exists already!");
      throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
      email: userInput.email,
      name: userInput.name,
      password: hashedPw
    });
    const createdUser = await user.save();
    return { ...createdUser._doc, _id: createdUser._id.toString() };
  }
};
