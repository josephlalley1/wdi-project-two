const Articles = require('../models/articles');

function commentsCreate(req, res) {
  Articles
    .findById(req.params.id)
    .then(article => {
      article.comments.push(req.body);
      article.save().then(article => res.redirect(`/articles/${article.id}`));
    });
}

function commentsDelete(req, res) {
  Articles
    .findById(req.params.articleId)
    .then(article => {
      article.comments.id(req.params.commentId).remove();
      article.save().then(() => res.redirect(`/articles/${article.id}`));
    });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
