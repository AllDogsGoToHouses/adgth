module.exports = function(sequelize, DataTypes) {
  var Adopter = sequelize.define("Adopter", {
    adopter_name: DataTypes.STRING,
    adopter_email: DataTypes.STRING,
    adopter_favorites: DataTypes.STRING,
    },{
      timestamps: false
    },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Adopter;
};