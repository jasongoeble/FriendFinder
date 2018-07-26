//declare dependancy for npm path
var path = require("path");

//credit to james for explaining the module.exports
module.exports = function(app){

  
  app.get("/survey", function(req, res) 
  {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/home", function(req, res) 
  {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/", function(req, res) 
  {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
