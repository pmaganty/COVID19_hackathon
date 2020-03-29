// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

//requiring models to access tables from db
var db = require("../models");

//creating routes for sending html data to browser
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  //creating user info api
  app.post("/api/userInfo", function (req, res) {
    db.UserInfo.findAll().then(function(result) {
        res.json(result);
      });
  });
};
