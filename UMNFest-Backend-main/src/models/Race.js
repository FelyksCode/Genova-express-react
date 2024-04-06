const mongoose = require('mongoose');

const RaceSchema = new mongoose.Schema({
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Team',
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
