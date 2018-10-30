const honeypotController = require('../controllers/honeypotController');
const authController = require('../controllers/authControllers');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('home');
});

// INDEX ROUTE
router.get('/articles', honeypotController.indexRoute);

// NEW ROUTE
router.get('/articles/new', honeypotController.newRoute);

// LISTENING TO POST REQUESTS TO /ARTICLES
router.post('/articles', honeypotController.createRoute);

// SHOW ROUTE
router.get('/articles/:id', honeypotController.showRoute);

// UPDATE ROUTE
router.put('/articles/:id', secureRoute, honeypotController.updateRoute);

// EDIT ROUTE
router.get('/articles/:id/edit', secureRoute, honeypotController.editRoute);

// DELETE ROUTE
router.delete('/articles/:id', secureRoute, honeypotController.deleteRoute);

// LOGIN ROUTE
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

// REGISTER ROUTE
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

// LOGOUT ROUTE
router.get('/logout', authController.logoutRoute);

module.exports = router;
