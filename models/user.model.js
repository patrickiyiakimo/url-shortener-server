// const mongoose = require("mongoose");
const db = require("../config/db");
const Joi = require("joi");

const schema = Joi.object({
  name: string().required().min(3).max(30).alphanum(),
  email: string().required().lowercase(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const userModel = db.model("users", schema);
module.exports = userModel;
