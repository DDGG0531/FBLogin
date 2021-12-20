let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config()




passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://localhost:3000/auth/facebook/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    console.log('accessToken', accessToken)
    console.log('refreshToken', refreshToken)
    console.log('profile', profile)

    return cb(null, profile);
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;