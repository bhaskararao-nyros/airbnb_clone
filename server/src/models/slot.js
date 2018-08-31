var mongoose = require('mongoose');

var slotSchema = new mongoose.Schema({
  gr_name: { type: String },
  start_date: { type: String },
  end_date: { type: String },
  from_time: { type: String },
  to_time: { type: String },
  week_days: { type: Array },
    }, {
  timestamps: true
});

module.exports = mongoose.model('slot', slotSchema);