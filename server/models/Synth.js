const mongoose = require('mongoose')
const collection = 'synths'
//si falla la var synthSchema ponerla así:
//const Schema = mongoose.Schema
//var SynthSchema = new Schema({
var SynthSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },


    buyOrSellIt: {
        type: Boolean,
        required: true
    },

    kindOfProduct: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    condition: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    createdAt: {
        type: Number,
        default: +new Date()
    }
}, { collection })

module.exports = mongoose.model('Synth', SynthSchema);