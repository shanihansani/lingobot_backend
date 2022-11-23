// Third-party libraries & modules
const express = require("express");
const cors = require("cors");
require("dotenv/config");

// Custom libraries & modules
const connectDatabase = require("./api/helpers/DatabaseConnection");
const userRoutes = require("./api/routes/User");
const pointRoutes = require("./api/routes/Points");

// Global instances
const app = express();
const PORT = process.env.PORT || 3301;

// Common middleware
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.status(200).json({ success: { message: `Welcome to the server!` } });
});

// Base route for user
app.use("/api/users", userRoutes);

// Base route for points
app.use("/api/points", pointRoutes);

// Error route
app.use((req, res) => {
  res.status(404).json({ error: { message: `Not found!` } });
});

// Initialize the connection
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDatabase();
});
