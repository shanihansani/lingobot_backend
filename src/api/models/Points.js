// Third-party libraries & modules
const mongoose = require("mongoose");

// Points schema
const PointSchema = new mongoose.Schema({
  userId: {
    type: "String",
    required: true,
  },
  language: {
    type: "String",
    required: true,
  },
  points: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("Point", PointSchema);
