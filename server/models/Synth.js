const mongoose = require('mongoose')

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
}, { collection:'synths' })

module.exports = mongoose.model('Synth', SynthSchema)

module.exports.getAllProducts = function (callback, limit) {
  Product.find(callback).limit(limit)
}