const mongoose = require("mongoose");

const db = async () => {
  try {
    const mongoData = process.env.DATABASE_URL;
    mongoose.connect(mongoData);
    const database = mongoose.connection;

    database.on("error", (error) => {
      console.log(error);
    });

    database.once("connected", () => {
      console.log("Database is connected");
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = db;
