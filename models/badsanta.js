var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadSantaSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  strength: String,
  weakness: String,
  bio: String,
  image: String,
  _creator: {type:String, ref:"user"}
});

module.exports = mongoose.model('BadSanta', BadSantaSchema);
