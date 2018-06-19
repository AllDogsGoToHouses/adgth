var db = require("../models")
var express = require("express")
var router = express.Router();

 router.get('/getUserData', function (req, res) {
      console.log("getUserData");
      var data = req.query;
      db.User.findOne({
        where: {
          email: data.email
        }
      }).then(function(resData){
      	console.log("resData")
      	console.log(resData)
        res.send(resData);
      });
    
});