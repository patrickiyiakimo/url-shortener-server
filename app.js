// const express = require("express");
// // const Joi = require("joi");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const userRouter = require("./routers/user.router");
// const urlRouter = require("./routers/url.router");

// const app = express();

// app.use(cors({
//     origin: '*',
// }));
// app.use(express.json());

// app.use("/", userRouter);
// app.use("/", urlRouter);

// app.use(bodyParser.json({ limit: "50Mb" }));
// app.use(bodyParser.urlencoded({ extended: true }));

// module.exports = app;



const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const urlRouter = require("./routers/url.router");

const app = express();

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);


// Middleware to parse JSON requests
app.use(express.json());

// Use routers
app.use("/api/users", userRouter);
app.use("/api/urls", urlRouter);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal server error" });
});

module.exports = app;
