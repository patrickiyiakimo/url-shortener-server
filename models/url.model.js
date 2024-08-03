// // const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;

// // const urlSchema = new Schema({
// //   userId: { type: Schema.Types.ObjectId, required: true },
// //   longUrl: { type: String, required: true },
// //   shortUrl: { type: String, required: true },
// // });

// // const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

// // module.exports = urlSubmitModel;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const urlSchema = new Schema({
//   email: { type: String, required: true }, // Use email instead of userId
//   longUrl: { type: String, required: true },
//   shortUrl: { type: String, required: true },
// });

// const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

// module.exports = urlSubmitModel;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  email: { type: String }, // Not required
  longUrl: { type: String, required: true }, // Required
  shortUrl: { type: String }, // Not required
});

const urlSubmitModel = mongoose.model("UrlSubmit", urlSchema);

module.exports = urlSubmitModel;
