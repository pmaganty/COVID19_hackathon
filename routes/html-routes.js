// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

//creating routes for sending html data to browser
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  app.post("/", function (req, res) {

  });
};
