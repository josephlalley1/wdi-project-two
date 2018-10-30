const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: String,
  coverimg: String,
  frontPageSummary: String,
  content: String
});

const articlesModel = mongoose.model('Articles', articlesSchema);

module.exports = articlesModel;
