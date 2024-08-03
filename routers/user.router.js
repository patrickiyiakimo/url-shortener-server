// const router = require("express").Router();
// const userModel = require("../models/user.model");

// router.post("/userRegistration", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       const createuser = new userModel({ name, email, password });
//       await createuser.save();
//       return res.status(200).send("user registration successful");
//     } else {
//       return res.status(404).send("user already exist");
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// });


// router.post("/userLogin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email, password });
//     if (user) {
//       return res.status(200).send("User Log In was Successful");
//     } else {
//       return res.status(200).send("User Log In Failed");
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const userModel = require("../models/user.model"); // Adjust path as necessary

// // User Registration
// router.post("/userRegistration", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).send("All fields are required");
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(409).send("User already exists");
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new userModel({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).send("User registration successful");
//   } catch (error) {
//     console.error("Error during user registration:", error.message);
//     res.status(500).send("Internal server error");
//   }
// });

// // User Login
// router.post("/userLogin", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send("Email and password are required");
//   }

//   try {
//     // Find the user by email
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     // Compare the provided password with the hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch) {
//       res.status(200).send("User login successful");
//     } else {
//       res.status(400).send("Invalid password");
//     }
//   } catch (error) {
//     console.error("Error during user login:", error.message);
//     res.status(500).send("Internal server error");
//   }
// });

// module.exports = router;







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




