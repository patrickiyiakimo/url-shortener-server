require("dotenv").config();
const db = require("./config/db");

const app = require("./app");

app.get("/", (req, res) => {
  res.send("hello world");
});

const server = async () => {
  try {
    await db();
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  } catch (error) {
    console.error(error.message);
  }
};

server();
