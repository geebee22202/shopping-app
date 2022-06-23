//how to create a server through node.js
//first need to import some functionalities
//core modules
//http - helps with launching a server or sending requests
//https - launch an SSL Server
//fs
//path(works on any browser)
//os
//require is how you import files into Node.js

//can import your own file like "./http", in the case below, we're using  a core module
// const http = require("http"); removed due to express
//above allows us to work with file system and create new file

// const routes = require('./routes')

// //receives a request and a response
// //event driven architecture

const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const path = require("path");

//recommend to install with npm install --save -body-parser

//allows us to create middleware
//next is a funciton that will be passed through this function - this allows request to travel on to next middleware in line
// app.use((req, res, next) => { //remove dummy middleware
//   console.log("middleware");
//   next();n
// });

//only use below function if we have a middleware that should be applied to all requests but not necessary
// app.use("/", (req, res, next) => {
//   console.log("this always runs");
//   next();
// });

//this registers a middleware, will call next and will do req.body
app.use(bodyParser.urlencoded({ extended: true }));

//allows us to serve file statically, makes css read-only
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

// const server = http.createServer(app); removed due to express
// server.listen(3000);removed due to express
app.listen(3000);

//event loop is  a loop process as long as there are work to do or there is an
//ongoing event listener. it's what manages the server/application
//process.exit hards exits are event loop, making website unaccessible
