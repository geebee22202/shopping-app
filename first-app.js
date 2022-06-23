//in node js, you don't just run the code, but you can also create a serverw with it
//handle business logis, connect to database, handle request
//responses = return html, json, files, etc to clients

const fs = require('fs') //file system, one of node's core modules

fs.writeFileSync('hello.txt', 'hello from Node.js')