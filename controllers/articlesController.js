const Articles = require('../models/articles');

function newRoute(req, res) {
  res.render('articles/new');
}

function indexRoute(req, res) {
  Articles.find().populate('addedBy').then(function(result) {
    res.render('articles/index', { articles: result });
  });
}

function createRoute(req, res) {
  Articles.create(req.body).then(function(){
    res.redirect('/articles');
  });
}

function showRoute(req,res) {
  Articles.findById(req.params.id).populate('comments.addedBy addedBy').then(result => {
    res.render('articles/show', { article: result });
  });
}

function updateRoute(req, res){
  Articles.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/articles');
    });
}

function editRoute(req, res) {
  Articles.findById(req.params.id)
    .then(result => {
      res.render('articles/edit', result);
    });
}

function deleteRoute(req, res) {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/articles'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
