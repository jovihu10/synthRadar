
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SynthSchema = require('../../../models/Synth')
// var Model = mongoose.model(SynthSchema);
var app = express();

//mongoose.connect('mongodb://admin:admin@ds157833.mlab.com:57833/synthradar');

function showHome (req, res) {
	SynthSchema
		.find()
		//Este sort es para que me los ordene del último al primero
		.sort({_id:-1})
		.then(synths => res.render('pages/index', {synths}))

}


//buscador
app.put('/synth/:id', (req, res) => {
  const id = req.params.id
  const reserved = req.body.reserved

  Product.findByIdAndUpdate(id, {reserved})
  .then(() => res.render('pages/index', {synths}))
})






module.exports = showHome
