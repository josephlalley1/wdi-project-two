const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema({
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: String,
  coverimg: String,
  frontPageSummary: String,
  content: String,
  comments: [{
    profilepic: { type: String },
    user: { type: String, required: true },
    content: { type: String },
    addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
});

const articlesModel = mongoose.model('Articles', articlesSchema);

module.exports = articlesModel;
