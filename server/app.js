const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("GDGOC AITR Registration API is running");
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const { name, email, phone, year, branch } = req.body;

    if (!name || !email || !phone || !year || !branch) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ name, email, phone, year, branch });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully!"
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error: " + err.message,
    });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
