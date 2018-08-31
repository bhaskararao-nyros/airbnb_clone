var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  website: { type: String },
    }, {
  timestamps: true
});

module.exports = mongoose.model('park', parkSchema);