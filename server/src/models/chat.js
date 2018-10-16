var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  message: { type: String },
  date: { type: Date },
    }, {
  timestamps: true
});

module.exports = mongoose.model('chat', chatSchema);