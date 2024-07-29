const router = require("express").Router();
const userModel = require("../models/user.model");

router.post("/userRegistration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      const createuser = new userModel({ name, email, password });
      await createuser.save();
      return res.status(200).send("user registration successful");
    } else {
      return res.status(404).send("user already exist");
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/userLogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (user) {
      return res.status(200).send("User Log In was Successful");
    } else {
      return res.status(200).send("User Log In Failed");
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
