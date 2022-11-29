// Third-party libraries & modules
const Express = require("express");

// Custom libraries & modules
const { authUser } = require("../middlewares/Authorization");

// Custom libraries & modules
const { createPoint, updatePoint, getPoint } = require("../controllers/Points");

// Global instances
const router = Express.Router();

// Create points
router.post("/create", authUser, createPoint);

// Get points
router.get("/get/:userId/:language", authUser, getPoint);

// Get points by user id
router.get("/get/all/:userId", authUser, getPoint);

// Update points
router.put("/update/:userId/:language/:points", authUser, updatePoint);

module.exports = router;
