var mongoose = require('mongoose');

var GoodSantaSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  strength: String,
  weakness: String,
  bio: String,
  image: String,
  _creator: {type:String, ref:"user"}
});

module.exports = mongoose.model('GoodSanta', GoodSantaSchema);
