// Third-party libraries & modules
const Express = require("express");

// Custom libraries & modules
const { loginUser, registerUser } = require("../controllers/User");

// Global instances
const router = Express.Router();

// Login
router.post("/login", loginUser);

// Register
router.post("/register", registerUser);

module.exports = router;
