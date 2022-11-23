// Third-party libraries & modules
const mongoose = require("mongoose");

// Points schema
const PointSchema = new mongoose.Schema({
  userId: {
    type: "String",
  },
  language: {
    type: "String",
  },
  points: {
    type: "Number",
  },
});

module.exports = mongoose.model("Point", PointSchema);
