var mongoose = require('mongoose');

var BadSantaSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  strength: String,
  weakness: String,
  bio: String,
  image: String
});

module.exports = mongoose.model('BadSanta', BadSantaSchema);
