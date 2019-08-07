const router = require("express").Router();
const booksController = require("../../controllers/booksController");

var passport = require('passport');

// Matches with "/user/auth"
router.route("/")
  .get(function(req, res) {
    res.render('home', { user: req.user })})
  .post(booksController.create);




router.route('/login')
.get(
  function(req, res){
    res.json({login: true});
})  
.post( 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.json({login: true});
});
  
router.route('/logout').get(
  function(req, res){
    req.logout();
    res.redirect('/');
});

router.route('/profile').get(
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
});

module.exports = router;
