const mongoose = require('mongoose');
const collection = 'synths'

var SynthSchema = new mongoose.Schema({
brand: {
  type: String,
  required: true
},

name: {
	type: String,
	required: true
},


price: {
	type: String,
	required: true
},

condition: {
	type: String,
	required: true
},
  address: {
    city: String,
    required: true
}
}, { collection })

module.exports = mongoose.model('Synth', SynthSchema);