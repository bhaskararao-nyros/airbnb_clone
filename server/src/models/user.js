var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String },
  email: { type: String, unique : true },
  profile_pic: { type: String },
  login_type: { type: String },
    }, {
  timestamps: true
});

module.exports = mongoose.model('user', userSchema);