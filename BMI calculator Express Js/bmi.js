const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = req.body.weight;
  var height = req.body.height;
  var bmi = weight / (height / 100) ** 2;
  res.send("Your BMI is " + bmi);
});

app.listen(3300, function () {
  console.log("yes baby i am here");
});
