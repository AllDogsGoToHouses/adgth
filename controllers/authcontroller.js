var exports = module.exports = {}


exports.signup = function(req,res){
 res.redirect('/');
}

exports.signin = function(req,res){

 res.redirect('/');

}

exports.dashboard = function(req,res){

	//res.render('dashboard'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}