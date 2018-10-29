const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
  title: String,
  coverimg: String,
  frontPageSummary: String,
  content: String
});

const articlesModel = mongoose.model('Articles', articlesSchema);

module.exports = articlesModel;
