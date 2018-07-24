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

// Displays results from survey answers
app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].fullname) {
        return res.json(reservation[i]);
      }
    }
  
    return res.send("No character found");
  
  });
  
  // Posts the survey results
  app.post("/api/friends", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservation.push(newReservation);
  
    res.json(newReservation);
  });
  