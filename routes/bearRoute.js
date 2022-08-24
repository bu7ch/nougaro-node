// const bearRouter = require("express").Router();
const express = require("express");
const bearRouter = express.Router();
const Bear = require("../models/bear");

bearRouter.get("/", (req, res) => {
  Bear.find({}, (err, bears) => {
    if (err) throw err;
    res.json(bears);
  });
});
bearRouter.post("/new", (req, res) => {
  const newBear = new Bear(req.body);
  newBear.save((err, bear) => {
    if (err) throw err;
    res.json({ message: "Bear saved successfully", bear });
  });
});

bearRouter.route("/:id").delete((req, res) => {
  Bear.remove({ _id: req.params.id }, (err) => {
    if (err) throw err;
    res.json({ message: "Bear deleted successfully" });
  });
});

module.exports = bearRouter;
