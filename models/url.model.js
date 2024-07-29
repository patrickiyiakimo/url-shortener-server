const db = require("../config/db");
const Joi = require("joi");
const userModel = require("./user.model");

const urlSubmitionSchema = Joi.object({
  userId: Schema.Types.objectId,
  longUrl: string(),
  shortUrl: string(),
});

const urlSubmitionModel = db.model("urlSubmition", urlSubmitionSchema);
module.exports = userModel;
