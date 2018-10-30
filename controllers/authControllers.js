const User = require('../models/user');

function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  User.create(req.body)
    .then(result => {
      console.log('User created', result);
      res.redirect('/articles');
    });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res, next) {
  console.log('we made it to loginRoute');
  console.log(req.body.email);
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        res.redirect('/login');
      } else {
        console.log('Logged in');
        req.session.userId = result._id;
        res.redirect('/articles');
      }
    })
    .catch(err => {
      console.log('there was an error ', err);
      next();
    });
}

function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/articles');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
