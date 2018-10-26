var mongoose = require('mongoose');

var notificationSchema = new mongoose.Schema({
  listing_id: { type: mongoose.Schema.Types.ObjectId, ref: 'host' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  reason: { type: String },
  type: { type: String },
  status: { type: Number, default: 0 }
    }, {
  timestamps: true
});

module.exports = mongoose.model('notification', notificationSchema);