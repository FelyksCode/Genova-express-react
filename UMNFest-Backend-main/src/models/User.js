const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  nim: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ktm: {
    type: String,
    required: true,
  },
  game_id: {
    type: String,
    required: true,
  },
  team_id: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
},{
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
