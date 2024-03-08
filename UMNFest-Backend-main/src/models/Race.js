const mongoose = require('mongoose');

const RaceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  race_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Race_Detail',
  },
},{
  versionKey: false
});

module.exports = mongoose.model('Race', RaceSchema);
