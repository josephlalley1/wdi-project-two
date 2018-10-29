const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const env = require('./config/environment');
const router = require('./config/routes');


mongoose.connect(env.dbUri);

const app = express();

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(session({
  secret: 'secret shh and shh',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static('public'));

app.use('*', function(req, res, next) {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
