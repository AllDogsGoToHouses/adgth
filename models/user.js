module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("user", {
    user_id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
  });
  return User;
};
