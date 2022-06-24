//handles the creation of producs

const path = require("path");
const express = require("express");

const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', "views", "add-product.html"));

  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // ); //default response header is html
});
//you have use either next or send a response

router.post("/add-product", (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect("/");
});

exports.routes = router;
exports.products = products
