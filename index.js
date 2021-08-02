// install express with `npm install express`
const express = require("express");
const { getVideoMeta } = require("tiktok-scraper");
const app = express();

app.get("/", async (req, res) => {
  try {
    const userMeta = await getVideoMeta(
      "https://www.tiktok.com/@tiktok/video/6800111723257941253",
      {}
    );
    console.log(userMeta);
    res.send(userMeta);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// export 'app'
// module.exports = app;

app.listen(process.env.PORT || 3000);
