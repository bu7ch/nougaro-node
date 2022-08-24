const router = require("express").Router();


router.get("/bonjour/:prenom", (req, res) => { 
  res.send(`bonjour ${req.params.prenom}`);
});


module.exports = router;