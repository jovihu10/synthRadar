const mongoose = require('mongoose')
const collection = 'synths'
var SynthSchema = new mongoose.Schema({
    title: String,
    buyOrSellIt: Boolean,
    kindOfProduct: String,
    brand: String,
    model: String,
    location: String,
    condition: String,
    description: String,
    price: Number,
    image: String,
    createdAt: Number
}, { collection })

module.exports = mongoose.model('Synth', SynthSchema)


//Para el search
module.exports.getAllProducts = function (callback, limit) {
  Product.find(callback).limit(limit)
}