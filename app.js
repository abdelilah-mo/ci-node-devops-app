const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Node DevOps TP 🚀" });
});

module.exports = app;
