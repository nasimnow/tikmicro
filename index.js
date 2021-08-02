// install express with `npm install express`
const express = require("express");
const { getUserProfileInfo } = require("tiktok-scraper");
const app = express();

app.get("/", async (req, res) => {
  //   try {
  //     const userMeta = await getUserProfileInfo("tiktok", {});
  //     console.log(userMeta);
  //     res.send(userMeta);
  //   } catch (error) {
  //     console.log(error);
  //     res.send(error);
  //   }
  res.send("hhhi");
});

// export 'app'
// module.exports = app;

app.listen(process.env.PORT || 3000);
