const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
const router = require("./routes/basicRoute");
const bonjour = require("./routes/greetings");

app.get("/", (req, res) => {
  res.send("Bienvenue dans mon API");
});

app.use("/greetings", bonjour);
app.use("/sports", router);
app.listen(port, () =>
  console.log(`[Application is running on port : ${port}]`)
);
