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

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
  // res.redirect('/profile');
});

// router.route('/profile').get(
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
// });

module.exports = router;
