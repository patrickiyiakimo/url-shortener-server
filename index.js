require("dotenv").config();

const app = require("./app");

app.get("/", (req, res) => {
  res.send("I will marry you Chidera");
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
