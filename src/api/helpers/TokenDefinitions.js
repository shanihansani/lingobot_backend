// Third-party libraries & modules
const jwt = require("jsonwebtoken");

// Custom libraries & modules
const configs = require("../../config");

// Function for generate json web tokens
const generateJWT = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    configs.JWT_PRIVATE_KEY,
    { expiresIn: "24h" }
  );
};

module.exports = { generateJWT };
