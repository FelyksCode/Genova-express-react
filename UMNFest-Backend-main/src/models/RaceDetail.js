const mongoose = require('mongoose');

const RaceDetailSchema = new mongoose.Schema({
  race_name: {
    type: String,
    required: true,
    unique: true,
  },
  race_description: {
    type: String,
  },
  race_members: {
    type: Number,
  },
  race_limit_teams: {
    type: Number,
  }
},
{
  versionKey: false
});

module.exports = mongoose.model('Race_Detail', RaceDetailSchema);
