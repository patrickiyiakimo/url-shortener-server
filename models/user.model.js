// // const mongoose = require("mongoose");
// const db = require("../config/db");
// const Joi = require("joi");

// const schema = Joi.object({
//   name: Joi.string().required().min(3).max(30).alphanum(),
//   email: Joi.string().required().lowercase(),
//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
// });

// const userModel = db.model("users", schema);
// module.exports = userModel;




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
