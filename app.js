const express = require("express");
const Joi = require("joi");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "50Mb" }));
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
