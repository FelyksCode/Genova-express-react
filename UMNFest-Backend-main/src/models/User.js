const mongoose = require('mongoose');

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
},{
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
