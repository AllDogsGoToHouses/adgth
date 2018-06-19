
//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (app,passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function (user, done) {
        done(null, user);
    });


    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
         done(null, user);
    });

    passport.use('local-signup', new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
    function (req, email, password, done) {

        var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({where: {username: email}}).then(function (user) {

            if (user) {
                var theUser = user.dataValues;
                 app.use(function (req, res, next) {
                  req.session.set('user_id', theUser.user_id);
                  next();
                });
                return done(null, theUser);
            }else {
                var userPassword = generateHash(password);
                var data = {username: email,
                            password: userPassword
                            };

                User.create(data).then(function (newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }

                    if (newUser) {
                         app.use(function (req, res, next) {
                          req.session.set('user_id', newUser.user_id);
                          next();
                        });
                        return done(null, newUser);

                    }


                });
            }


        });

    }


    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
            {
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
    function (req, email, password, done) {

        var User = user;

        var isValidPassword = function (userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        User.findOne({where: {email: email}}).then(function (user) {

            if (!user) {
                return done(null, false, {message: 'Email does not exist'});
            }

            if (!isValidPassword(user.password, password)) {

                return done(null, false, {message: 'Incorrect password.'});

            }

            var userinfo = user.get();

            return done(null, userinfo);

        }).catch(function (err) {

            console.log("Error:", err);

            return done(null, false, {message: 'Something went wrong with your Signin'});


        });

    }
    ));
  
}

