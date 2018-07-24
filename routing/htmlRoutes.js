// Dependencies
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');

var app = express()

app.use(serveStatic(path.join(__dirname, '/')))
app.listen(process.env.PORT || 3000)

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home page route
app.get("/", function(req, res) 
{
    res.send("Friend Finder");
});
  
// survey route
app.get("/survey", function(req, res) 
{
    res.send("Survey");
});