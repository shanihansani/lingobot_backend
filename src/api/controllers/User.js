// Third-party libraries & modules
const bcrypt = require("bcrypt");
require("dotenv/config");

// Custom libraries & modules
const User = require("../models/User");
const { generateJWT } = require("../helpers/TokenDefinitions");

// Function for user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if email doesn't exist
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ errors: { message: "Wrong email address!" } });
  }

  // Check if password matches
  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    return res.json({ errors: { message: "Wrong password!" } });
  }

  // Generate a login token
  const loginToken = generateJWT(user);

  // Custom user data
  const userData = {
    id: user._id,
    fullName: user.fullName,
  };

  return res
    .status(200)
    .json({ authentication: true, token: loginToken, data: userData });
};

// Function for user registration
const registerUser = async (req, res) => {
  const { fullName, email, password, dateTime } = req.body;

  // Check if email already exist
  const user = await User.findOne({ email: email });

  if (user) {
    return res.json({ errors: { message: "Email already exist!" } });
  }

  // Password hashing
  const hashedPassword = await bcrypt.hash(password, 8);

  // Create new user
  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
    dateTime,
  });

  try {
    // Save user
    await newUser.save();
    return res.status(201).json({
      created: true,
      success: { message: "Successfully registered a user!" },
    });
  } catch (err) {
    return res.json({ errors: err });
  }
};

module.exports = { loginUser, registerUser };
