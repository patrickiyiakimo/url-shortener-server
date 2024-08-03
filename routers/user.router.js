const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const router = express.Router();

// User Registration
router.post("/userRegistration", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registration successful" });
  } catch (error) {
    console.error("Error during user registration:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User Login
router.post("/userLogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({ message: "User login successful" });
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during user login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
