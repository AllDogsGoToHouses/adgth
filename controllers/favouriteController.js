//const Op = Sequelize.Op

module.exports = function (app) {

var db = require("../models")


app.post("/updateFav", function(req, res){
   console.log("updating Favourite");
   var data = req.body;
   var user_id = req.session.get("user_id");

   console.log("user_id: "+user_id);
   
   var dog_id = data.dog_id;
   
   console.log(data) 

 db.Favourite.findOne({where: {user_id: user_id,dog_id:dog_id}}).then(function (fav) {

        if (fav) {
            var data = {
                user_id: user_id,
                dog_id: dog_id
            };
            var theFav = fav.dataValues;  
            db.Favourite.destroy({
              where:data,
              truncate:false
            })
             res.send({message:"Removed Favourite",success:0})        
        }else {
            var data = {
                user_id: user_id,
                dog_id: dog_id
            };

            db.Favourite.create(data).then(function (newFav, created) {
                if (!newFav) {
                }
                if (newFav) {
                  console.log("Inserted Favourite");
                  res.send({message:"Added Favourite",success:1})
                }

            });
        }


    });

});

app.get("/getFavs", function(req, res){
    console.log("Got get for /api/dogs")
    var data = req.query;
    console.log(data)

     var user_id = req.session.get("user_id");

     sequelize.query("SELECT * FROM (`Dogs` INNER JOIN Favourites ON Dogs.id = Favourites.dog_id ) LEFT JOIN `Shelters` ON  `Shelters`.id = `Dogs`.shelter_id WHERE user_id =  "+user_id, { type: sequelize.QueryTypes.SELECT})
          .then(dbDogs => {
            res.json(dbDogs);
          })


})
};
