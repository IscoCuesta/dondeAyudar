const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
  name: {type: String, required: false},
  googleId: String,
  thumbnail: String
});
 
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);
