//declare dependancy for friends.js data file
var friendsContainer = require("../data/friends.js");

//credit to james for explaining the module.exports
module.exports = function (app){

  app.get("/api/friends", function(req, res) 
  {
      res.json(friendsContainer);
  });
  
  
  
  app.post("/api/friends", function(req, res) 
  {
    friendsContainer.push(req.body);
  
    res.json(true);
  });
  
  };