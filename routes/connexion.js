const conn = require("express").Router();

conn.get("/inscription", (req, res) => {
  res.send('Vous êtes inscrit')
})
conn.get("/connexion", (req, res) => {
  res.send('Vous êtes connecté ')
})


module.exports = conn;