const express = require("express");
const app = express();

app.use(express.static("./dist/testiapp"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/testiapp/" });
});

app.listen(process.env.PORT || 8080);
