const express = require("express");
const app = express();
const volleyball = require("volleyball");

const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nougaro_db", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log(`[MongoDB is connected!!]`);
});

const port = process.env.PORT || 5000;
const router = require("./routes/basicRoute");
const bonjour = require("./routes/greetings");
const con = require("./routes/connexion");
const bears = require("./routes/bearRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.use(volleyball)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/greetings", bonjour);
app.use("/sports", router);
app.use("/sign", con);
app.use("/bears", bears);
app.listen(port, () =>
  console.log(`[Application is running on port : ${port}]`)
);
