require("./db/mongoose.js")
const express = require('express')
const path = require("path");
const app = express()
var bodyParser = require('body-parser')

const routes = require('./routes');

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

routes.apiRoutes(app);

app.listen(port, function() {
    console.log("The server runs at port : 3080");
})