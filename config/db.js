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



// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     throw error;
//   }
// };

// module.exports = connectDB;
