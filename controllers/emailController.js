var db = require("../models")



module.exports = function (app) {

 app.get('/getUserData', function (req, res) {

      console.log("getUserData");

       var email = req.session.get('email');
       var user_id = req.session.get('user_id');

      var data = {
         email:email,
         user_id:user_id
      }
      
      console.log(data);

      res.json(data);
    
});

};