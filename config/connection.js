// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  /*connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', // Add your password
    database : 'all_dogsDB' // Add your database
  });*/
   connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'b50187286886ad',
    password : '301c0e86', // Add your password
    database : 'heroku_6d25e30d7fe5f42' // Add your database
  });
}

// Export the Connection
module.exports = connection;