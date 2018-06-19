module.exports = function (app,passport, user) {
    
     var User = user;

    var configAuth = require('./auth');
    var FacebookStrategy = require('passport-facebook').Strategy;
    var bCrypt = require('bcrypt-nodejs');


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new FacebookStrategy({
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields: ['id', 'email', 'name']
    },
    function (accessToken, refreshToken, profile, done) {

        process.nextTick(function () {
            console.log("FB result")

            var name = profile.name.givenName + ' ' + profile.name.familyName;
            var email = profile.emails[0].value;
            
            var randomstring = Math.random().toString(36).slice(-8);
          
            var generateHash = function (password) {
              return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
           
          User.findOne({where: {username: email}}).then(function (user) {

            if (user) {
                var theUser = user.dataValues;
                app.use(function (req, res, next) {
                  req.session.set('user_id', theUser.user_id);
                   req.session.set('email', email);
                  next();
                });
                return done(null, false, theUser);
            }else {
                var userPassword = generateHash(randomstring);
                var data = {
                    username: email,
                    password: userPassword
                };

                User.create(data).then(function (newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }

                    if (newUser) {
                        app.use(function (req, res, next) {
                          req.session.set('user_id', newUser.user_id);
                           req.session.set('email', email);
                          next();
                      });
                        return done(null, newUser);

                    }


                });
            }


        });

           
        });
    }
    ));
};
