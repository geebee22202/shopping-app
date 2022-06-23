//what the user sees

const express = require('express')
const router = express.Router()


router.get("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>"); //default response header is html
});

module.exports = router