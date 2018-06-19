module.exports = function(sequelize, DataTypes) {

  var Favourite = sequelize.define("Favourite", {
	    fav_id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
	    user_id: DataTypes.INTEGER,
	    dog_id: DataTypes.INTEGER
    },{
      timestamps: false
    },{
    classMethods: {
      associate: function(models) {
      	
      }
    }
  });
  return Favourite;

};
