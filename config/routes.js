const honeypotController = require('../controllers/honeypotController');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('home');
});

// INDEX ROUTE
router.get('/articles', honeypotController.indexRoute);

module.exports = router;
