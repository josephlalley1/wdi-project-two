const User = require('../models/user');
const Articles = require('../models/articles');

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
      if (!result || result.password !== req.body.password) {
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

function moderateRoute(req, res) {
  Articles.find().populate('addedBy').then(function(result) {
    res.render('auth/moderate', { articles: result });
  });
}

function moderateUpdateRoute(req, res){
  Articles.findById(req.params.articleId)
    .then(article => {
      console.log(article.comments);
      const comment = article.comments.id(req.params.commentId);
      comment.set(req.body);
      return article.save();
    })
    .then(() => res.redirect('/moderate'));
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute,
  moderateRoute: moderateRoute,
  moderateUpdateRoute: moderateUpdateRoute
};
