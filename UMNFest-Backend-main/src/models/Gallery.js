const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
},
{
  versionKey: false
});

module.exports = mongoose.model('Gallery', GallerySchema);
