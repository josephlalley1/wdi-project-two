const articlesController = require('../controllers/articlesController');
const authControllers = require('../controllers/authControllers');
const commentsController = require('../controllers/commentsController');
const userController = require('../controllers/userController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('pages/home');
});

router.post('/articles/:id/comments', commentsController.create);
router.delete('/articles/:articleId/comments/:commentId', commentsController.delete);

// INDEX ROUTE
router.get('/articles', articlesController.indexRoute);

// NEW ROUTE
router.get('/articles/new', secureRoute, articlesController.newRoute);

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

// PROFILE ROUTE
router.get('/users/:id', userController.profileRoute);


module.exports = router;
