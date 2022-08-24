const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Bienvenue dans mon API");
});

app.listen(port, () =>
  console.log(`[Application is running on port : ${port}]`)
);