var mongoose = require('mongoose');

var review_rating = new mongoose.Schema({
  rating: { type:Number },
  review: { type:String },
  user_id:{ type:mongoose.Schema.Types.ObjectId, ref: 'user' }
});

var hostSchema = new mongoose.Schema({
  location: { type: String },
  images: { type: Array },
  price: { type: Number },
  bed_rooms: { type: Array },
  bath_rooms: { type: Array },
  review_rating: [review_rating],
  guests: { type: Number },
  host_type: { type: String },
  map_coordinates: { type: Object },
  amentities: { type: Object },
  safety_amentities: { type: Object },
  allowed_spaces: { type: Object },
  rules: { type: Object },
  about: { type: String },
  name: { type: String },
  approved: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    }, {
  timestamps: true
});

module.exports = mongoose.model('host', hostSchema);