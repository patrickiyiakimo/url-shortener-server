const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

module.exports = urlSubmitModel;
