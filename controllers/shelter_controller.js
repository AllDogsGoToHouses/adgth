var express = require("express")
var router = express.Router();

var db = require("../models")

//Route to get all shelters
router.get("/api/shelter", function(req, res){
	console.log("Got get for /api/shelter")
  db.Shelter.findAll({
  	attributes: { exclude: ['createdAt','updatedAt'] }
  })
  .then(function(dbShelters) {
    res.json(dbShelters);
  });
})

//Route to create a new dog
router.post("/api/shelter", function(req, res){
	db.Shelter.create({
		shelter_name: req.body.shelter_name,
		shelter_manager: req.body.shelter_manager,
		shelter_number: req.body.shelter_number,
		shelter_email: req.body.shelter_email,
	}).then (function(dbShelter){
		console.log("Adding new dog: ");
		console.log(dbShelter);
		//TODO: Do we want this action to redirect to the homepage?
		res.redirect("/shelter");
	})
});

//Route to get a specific shelter
router.get("/api/shelter/:id", function(req, res){
	console.log("Ha");
	db.Shelter.findOne({
		where: {
			id: req.params.id
		},
		include: [db.Dog]
	}).then(function(dbShelter){
		res.json(dbShelter);
	});
});

module.exports = router;