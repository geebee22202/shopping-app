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
  //don't need line below since we're using pug engine
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  //passing products to render dynamic content
  const products = adminData.products;
  //can't run logic in hbs template, just output single variables
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
