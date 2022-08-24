const router = require("express").Router();

router.get("/tennis", (req, res) => {
  res.send("Rolland Garros");
});
router.get("/football", (req, res) => {
  res.send("League des Champions");
});

module.exports = router;
