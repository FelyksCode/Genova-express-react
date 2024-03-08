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
},
{
  versionKey: false
});

module.exports = mongoose.model('Race_Detail', RaceDetailSchema);
