// const shortid = require("shortid");



// const urlSubmitModel = require("../models/url.model");

// const router = require("express").Router();

// router.post("/urlSubmit", async (req, res) => {
//   const { userId, longUrl } = req.body;
//   try {
//     const randomUrl = shortid.generate();
//     const urlSubmit = new urlSubmitModel({
//       userId,
//       longUrl,
//       shortUrl: randomUrl,
//     });
//     await urlSubmit.save();

//     res.status(200).json({ shortUrl: `http://localhost:8000${randomUrl}` });
//   } catch (error) {
//     console.error(error.message);
//     res.status(400).send("Error while shortening url");
//   }
// });

// module.exports = router;




const shortid = require("shortid");
const urlSubmitModel = require("../models/url.model");
const router = require("express").Router();

router.post("/urlSubmit", async (req, res) => {
  const { userId, longUrl } = req.body;
  try {
    const randomUrl = shortid.generate();
    const urlSubmit = new urlSubmitModel({
      userId,
      longUrl,
      shortUrl: randomUrl,
    });
    await urlSubmit.save();

    res.status(200).json({ shortUrl: `${randomUrl}` });
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Error while shortening url");
  }
});

module.exports = router;
