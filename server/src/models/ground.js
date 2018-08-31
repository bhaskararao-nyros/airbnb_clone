var mongoose = require('mongoose');

var groundSchema = new mongoose.Schema({
  name: { type: String },
  park_id: { type: mongoose.Schema.Types.ObjectId, ref: 'park' },
  sports: { type: Array },
    }, {
  timestamps: true
});

module.exports = mongoose.model('ground', groundSchema);