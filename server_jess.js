var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var path = require("path")
var PORT = 3000

 
app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/adopter', function (req, res) {
    res.render('adopter');
});

app.get('/shelter', function (req, res) {
    res.render('shelter');
});

app.get('/results', function (req, res) {
    res.render('results');
});

app.get('/faves', function (req, res) {
    res.render('faves');
});
app.listen(PORT);