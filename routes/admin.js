//handles the creation of producs

const express = require('express')

const router = express.Router()

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  ); //default response header is html
});
//you have use either next or send a response

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});


module.exports = router