var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  uname: { type: String },
  email: { type: String },
  phone: { type: String },
  type: { type: Array },
    }, {
  timestamps: true
});

module.exports = mongoose.model('admin', adminSchema);