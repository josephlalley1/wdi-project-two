const Articles = require('../models/articles');

function newRoute(req, res) {
  res.render('new');
}

function indexRoute(req, res) {
  Articles.find().then(function(result) {
    const articlesObject = {
      articles: result
    };
    console.log('this is the article object', articlesObject);
    res.render('index', articlesObject);
  });
}

function createRoute(req, res) {
  Articles.create(req.body).then(function(){
    res.redirect('/articles');
  });
}

function showRoute(req,res) {
  Articles.findById(req.params.id).then(result => {
    res.render('show', result);
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
      res.render('edit', result);
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
