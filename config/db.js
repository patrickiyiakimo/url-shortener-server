DATABASE_URL =
  "mongodb+srv://url-shortener:FYaK0pcMzA7rPlS1@cluster0.asxdhsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoose = require("mongoose");
const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database is connected");
});

const app = express();

module.exports = db;

// const mongoose = require("mongoose");

// const connection = mongoose.createConnection(
//   "mongodb+srv://iyiakimopatrick2002:E8SDVX08JdHBYreX@cluster0.asxdhsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );

// module.exports = connection;
