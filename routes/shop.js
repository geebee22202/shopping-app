//what the user sees
const path = require("path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // res.send("<h1>hello from express</h1>"); //default response header is html
  //below doesn't work becuase it's pointing to root folder
  // res.sendFile('/views/shop.html')
  //dirname is a global variable that holds aboslulte path to project folder
  //this way will work on both linux and windows systems
  //../ means go up one level
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render('shop');
});

module.exports = router;
