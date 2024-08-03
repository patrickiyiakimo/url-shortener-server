const shortid = require("shortid");
const urlSubmitModel = require("../models/url.model");
const router = require("express").Router();

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

//     res.status(200).json({ shortUrl: `http://localhost:8000/${randomUrl}` });
//   } catch (error) {
//     console.error(error.message);
//     res.status(400).send("Error while shortening url");
//   }
// });


router.post("/urlSubmit", async (req, res) => {
  const { longUrl } = req.body;
  try {
    const randomUrl = shortid.generate();
    const urlSubmit = new urlSubmitModel({
      longUrl,
      shortUrl: randomUrl,
    });
    await urlSubmit.save();

    res.status(200).json({ shortUrl: `http://localhost:8000/${randomUrl}` });
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Error while shortening URL");
  }
});

router.get("/:url", async (req, res) => {
  const { url } = req.params;
  const urlData = await urlSubmitModel.findOne({ shortUrl: url });

  console.log(urlData);

  if (urlData) {
    res.redirect(urlData.longUrl);
  } else {
    res.status(400).send("invalid url");
  }
});

router.post("/getUserUrl", async (req, res) => {
  const { userId } = req.body;
    const allUserUrl = await urlSubmitModel.find({ userId });
    if (allUserUrl) {
        res.status(200).send(allUserUrl)
    } else {
        res.status(400).send("no data found")
    }
});
module.exports = router;
