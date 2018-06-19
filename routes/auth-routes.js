var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

	app.get('/signup', authController.signup);

	app.get('/signin', authController.signin);

	app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
	                                                    failureRedirect: '/signup'}
	                                                    ));

	app.get('/dashboard',isLoggedIn, authController.dashboard);

	app.get('/logout',authController.logout);


	app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
	                                                    failureRedirect: '/signin'}
	                                                    ));

	app.get('/api/me',function(req,res){
		 if (req.isAuthenticated()) {
		 	res.send(req.user);
		 }else{
		 	res.send(req.user);
		 }
		 console.log("send")
		 console.log(req.user)
         //res.redirect('/');
	  });
	

	app.post("/registerEmail",function(req,res){
	    console.log("Posted");
	    var data = req.body; 
	    console.log(data);
	   var newUser = {};
	    newUser.local.username = data.email;
	    newUser.local.password = data.password;
	    console.log(newUser.local.username + " " + newUser.local.password);
	    newUser.save(function(err){
	            if(err)
	                    throw err;
	    });
	    res.redirect('/');
	   
	});

	/* FACEBOOK ROUTER */
	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));


	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { failureRedirect: '/' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	  });

	/* GOOGLE ROUTER */
	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback', 
	  passport.authenticate('google', { successRedirect: '/',
	                                      failureRedirect: '/' }));


	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	  res.redirect('/');
	}



	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated())
	        return next();
	    res.redirect('/signin');
	}


}






