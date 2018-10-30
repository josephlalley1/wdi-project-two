const articlesController = require('../controllers/articlesController');
const authControllers = require('../controllers/authControllers');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('home');
});

// INDEX ROUTE
router.get('/articles', articlesController.indexRoute);

// NEW ROUTE
router.get('/articles/new', articlesController.newRoute);

// LISTENING TO POST REQUESTS TO /ARTICLES
router.post('/articles', articlesController.createRoute);

// SHOW ROUTE
router.get('/articles/:id', articlesController.showRoute);

// UPDATE ROUTE
router.put('/articles/:id', secureRoute, articlesController.updateRoute);

// EDIT ROUTE
router.get('/articles/:id/edit', secureRoute, articlesController.editRoute);

// DELETE ROUTE
router.delete('/articles/:id', secureRoute, articlesController.deleteRoute);

// LOGIN ROUTE
router.get('/login', authControllers.loginFormRoute);
router.post('/login', authControllers.loginRoute);

// REGISTER ROUTE
router.get('/register', authControllers.registerFormRoute);
router.post('/register', authControllers.registerRoute);

// LOGOUT ROUTE
router.get('/logout', authControllers.logoutRoute);

module.exports = router;
