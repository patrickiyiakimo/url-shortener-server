const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  email: { type: String }, // Not required
  longUrl: { type: String, required: true }, // Required
  shortUrl: { type: String }, // Not required
});

const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

module.exports = urlSubmitModel;
