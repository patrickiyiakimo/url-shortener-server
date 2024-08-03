require("dotenv").config();
const db = require("./config/db");

const app = require("./app");

app.get("/", (req, res) => {
  res.send("hello world");
});

const server = async () => {
  try {
    await db();
    app.listen(8000, () => {
      console.log("server is running on port 8000");
    });
  } catch (error) {
    console.error(error.message);
  }
};

server();



// require("dotenv").config();
// const db = require("./config/db");
// const app = require("./app");
// const express = require("express");
// const mongoose = require("mongoose");
// const Url = require("./models/Url"); // Assuming your URL model is defined in models/Url.js

// let inMemoryStorage = [];

// // Middleware to parse JSON requests
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// // Example route with in-memory storage fallback
// app.post("/urlSubmit", async (req, res) => {
//   const { longUrl } = req.body;

//   if (!longUrl) {
//     return res.status(400).json({ error: "Long URL is required" });
//   }

//   try {
//     // Check if database connection is available
//     if (mongoose.connection.readyState !== 1) {
//       // If not connected to the database, store in memory
//       const shortUrl = generateShortUrl();
//       inMemoryStorage.push({ longUrl, shortUrl });
//       return res.status(201).json({ message: "Stored in memory", shortUrl });
//     }

//     // Assuming a URL model exists and connected to MongoDB
//     const newUrl = new Url({ longUrl, shortUrl: generateShortUrl() });
//     await newUrl.save();
//     res.status(201).json({ shortUrl: newUrl.shortUrl });
//   } catch (error) {
//     console.error("Error saving URL:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Generate a short URL (example implementation)
// const generateShortUrl = () => {
//   return Math.random().toString(36).substring(7);
// };

// const server = async () => {
//   try {
//     await db();
//     app.listen(8000, () => {
//       console.log("Server is running on port 8000");
//     });
//   } catch (error) {
//     console.error(error.message);
//     // Start server without DB connection
//     app.listen(8000, () => {
//       console.log("Server is running on port 8000 without DB connection");
//     });
//   }
// };

// server();
