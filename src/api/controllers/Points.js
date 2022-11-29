// Custom libraries & modules
const Point = require("../models/Points");

// Function for create point
const createPoint = async (req, res) => {
  const { userId, language, points } = req.body;

  // Check if point already exist
  const point = await Point.findOne({ userId, language });

  if (point) {
    return res.json({
      errors: {
        message: "Point already exist, no need to create another one!",
      },
    });
  }

  // Create new point
  const newPoint = new Point({
    userId,
    language,
    points,
  });

  try {
    // Save point
    await newPoint.save();
    return res.status(201).json({
      created: true,
      success: { message: "Successfully created a point!" },
    });
  } catch (err) {
    return res.json({ errors: err });
  }
};

// Function for update point
const updatePoint = async (req, res) => {
  const { userId, language, points } = req.params;

  try {
    await Point.findOneAndUpdate(
      { userId, language },
      { points },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      created: true,
      success: { message: "Successfully updated the point!" },
    });
  } catch (err) {
    res.json({ errors: err });
  }
};

// Function for get point
const getPoint = async (req, res) => {
  const { userId, language } = req.params;

  try {
    const points = await Point.find({ userId, language });
    return res.status(200).json(points);
  } catch (err) {
    return res.json({ errors: err });
  }
};

// Function for get point by user id
const getPointByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const points = await Point.find({ userId });
    return res.status(200).json(points);
  } catch (err) {
    return res.json({ errors: err });
  }
};

module.exports = {
  createPoint,
  updatePoint,
  getPoint,
  getPointByUserId,
};
