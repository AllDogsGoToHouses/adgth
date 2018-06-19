module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    dog_name: DataTypes.STRING,
    dog_image_url: DataTypes.STRING,
    dog_size: DataTypes.STRING,
    age: DataTypes.INTEGER,
    activity_level: DataTypes.STRING,
    gender: DataTypes.STRING,
    breed:DataTypes.STRING,
    likes: DataTypes.STRING,
    dislikes: DataTypes.STRING,
    shelter_id: DataTypes.INTEGER,
  }, {
    timestamps: false
  },{
    classMethods: {
      associate: function(models) {
         Dog.belongsTo(models.Shelter,{
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Dog;
};

