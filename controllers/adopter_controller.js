var express = require("express")
var router = express.Router();


var db = require("../models")

router.get("/api/adopter", function(req, res){
	console.log("Got get for /api/adopter")
    db.Dog.findAll({
    	attributes: { exclude: ['createdAt','updatedAt'] } 
    })
      .then(function(dbAdopters) {
        res.json(dbAdopters);
      });
})

//Route to create a new dog
router.post("/api/adopter", function(req, res){
	db.Adopter.create({
		adopter_name: req.body.adopter_name,
		adopter_email: req.body.adopter_email,
		adopter_favorites: req.body.adopter_favorites,
	}).then (function(dbAdopter){
		console.log("Adding new adopter: ");
		console.log(dbAdopter);
		res.redirect("/adopter");
	})
});

//Route to get a specific Adopter, should load profile page??
router.get("/api/adopter/:id", function(req, res){
	db.Adopter.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(dbAdopter){
		res.json(dbAdopter);
	});
});

//Route to update adopter's favorites
router.put("/api/adopter/:id", function(req, res){
	db.Adopter.update({
		adopter_favorites: req.body.adopter_favorites
	},{
		where: {
			id: req.params.id
		}
	}).then(function(dbAdopter){
		res.json(dbAdopter);
	})
});

module.exports = router;