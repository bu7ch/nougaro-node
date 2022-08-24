// const bearRouter = require("express").Router();
const express = require("express");
const bearRouter = express.Router();
const Bear = require("../models/bear");

bearRouter.get("/", (req, res) => {
  Bear.find({}, (err, bears) => {
    if (err) throw err;
    res.render("allbears", { bears: bears });
  });
});
bearRouter.get("/new", (req, res) => {
  res.render("new");
});
bearRouter.post("/new", (req, res) => {
  const newBear = new Bear(req.body);
  newBear.save((err, bear) => {
    if (err) throw err;
    // res.json({ message: "Bear saved successfully", bear });
    res.redirect('/bears')
  });
});

bearRouter.route("/edit/:b_id")
.get((req, res) => {
    console.log(req.query)
    Bear.findById(req.params.b_id, (err, bear) => {
      if (err) throw err;
      res.render("edit", { bear: bear });
    })
  })
  .post((req, res) => {
    Bear.findById(req.params.b_id , (err, bear) => {
      if (err) console.err(err);
      Object.assign(bear, req.body).save((err, bearEdited) => {
        if (err) throw err;
        // res.json({ message: "Bear edited successfully", bearEdited });
        res.redirect("/bears");
      });
    });
  });
bearRouter.get("/delete/:b_id", (req, res) => {
  Bear.remove({ _id: req.params.b_id }, (err) => {
    if (err) throw err;
    // res.json({ message: "Bear deleted successfully" });
    res.redirect("/bears");
  });
});

module.exports = bearRouter;
