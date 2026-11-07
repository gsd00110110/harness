const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Learning Harness CICD using a node app");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});