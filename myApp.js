require("dotenv").config();
let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

var message = "Hello json";

app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({ message: message.toUpperCase() });
  } else {
    res.json({ message: message });
  }
});

module.exports = app;
