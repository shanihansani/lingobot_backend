// Third-party libraries & modules
const mongoose = require("mongoose");

// User schema
const UserSchema = new mongoose.Schema({
  fullName: {
    type: "String",
  },
  email: {
    type: "String",
  },
  password: {
    type: "String",
  },
  dateTime: {
    type: "String",
  },
});

module.exports = mongoose.model("User", UserSchema);
