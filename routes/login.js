var express = require('express');
var router = express.Router();

const passport = require('../config/passport');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function (req, res, next) {
  // console.log(req.user);
  res.render('success', { data: req.user });
})

router.get('/auth/facebook',
  passport.authenticate('facebook')
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/',
  })
);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
