// Third-party libraries & modules
const Express = require("express");

// Custom libraries & modules
const { authUser } = require("../middlewares/Authorization");

// Custom libraries & modules
const {
  createPoint,
  updatePoint,
  getPoint,
  getPointByUserId,
} = require("../controllers/Points");

// Global instances
const router = Express.Router();

// Create points
router.post("/create", createPoint);

// Get points
router.get("/get/:userId/:language", getPoint);

// Get points by user id
router.get("/all/get/:userId", getPointByUserId);

// Update points
router.put("/update/:userId/:language/:points", updatePoint);

module.exports = router;
