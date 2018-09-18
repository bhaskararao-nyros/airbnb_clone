var mongoose = require('mongoose');

var hostSchema = new mongoose.Schema({
  location: { type: String },
  images: { type: Array },
  price: { type: Number },
  beds: { type: Number },
  washroom: { type: String },
  kitchen: { type: Object },
  guests: { type: Number },
  room_type: { type: String },
  map_coordinates: { type: Object },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    }, {
  timestamps: true
});

module.exports = mongoose.model('host', hostSchema);