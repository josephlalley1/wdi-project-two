const User = require('../models/user');

function profileRoute(req,res) {
  User.findById(req.params.id).then(result => {
    res.render('user/profile', { user: result });
  });
}

module.exports = {
  profileRoute: profileRoute
};
