var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'mysql',
    protocol: 'mysql',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize("mysql://yr4a5ofbbdo6pebr:ildouhzvr4dcw30m@qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/somxan3hz9wv9f5x");
}



fs.readdirSync(__dirname)
  .filter(file =>{
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
