const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  team_name: {
    type: String,
    required: true
  },
  line_id: {
    type: String,
    required: true
  },
  paymentProof: {
    type: String,
  }
},{
  versionKey: false
});

module.exports = mongoose.model('Team', TeamSchema);
