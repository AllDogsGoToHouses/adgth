var path = require("path")

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
       req.session.set("views.power","timerless");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get('/privacy', function (req, res) {
      res.sendFile(path.join(__dirname, "../public/privacy_policy.html"));
  });
  app.get("/adopter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adopter.html"));
  });

  app.get("/faves", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/faves.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



  app.get("/shelter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shelter.html"));
  });
   app.get("/result", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"));
  });
  

};
