const express = require("express");
const app = express();

const PORT = 7543;

app.get("/", function (req, res) {
  res.send("Bla BLA Bla");
});

app.listen(PORT, () => {
  console.log("running.... " + PORT);
});
