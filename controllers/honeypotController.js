const Articles = require('../models/articles');

function indexRoute(req, res) {
  Articles.find().then(function(result) {
    const articlesObject = {
      articles: result
    };
    console.log('this is the article object', articlesObject);
    res.render('index', articlesObject);
  });
}

module.exports = {
  indexRoute: indexRoute
};
