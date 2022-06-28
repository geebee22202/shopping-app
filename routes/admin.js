//handles the creation of producs

const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product", path: '/admin/add-product', activeAddProduct: true, formsCSS: true, productCSS: true });
  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // ); //default response header is html
});
//you have use either next or send a response

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
