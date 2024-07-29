// const db = require("../config/db");
// const Joi = require("joi");
// const userModel = require("./user.model");

// const urlSubmitionSchema = Joi.object({
//   userId: Schema.Types.objectId,
//   longUrl: string(),
//   shortUrl: string(),
// });

// const urlSubmitionModel = db.model("urlSubmition", urlSubmitionSchema);
// module.exports = userModel;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

module.exports = urlSubmitModel;
