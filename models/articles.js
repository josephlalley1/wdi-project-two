const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: String,
  coverimg: String,
  frontPageSummary: String,
  content: String,
  comments: [{
    user: { type: String, required: true },
    content: { type: String }
  }]
});

const articlesModel = mongoose.model('Articles', articlesSchema);

module.exports = articlesModel;
