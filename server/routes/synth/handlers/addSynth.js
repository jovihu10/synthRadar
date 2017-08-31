const Synth = require('/models/Synth')

function byId (req,res) {

  const {title, image, buyOrSellIt, kindOfProduct, brand, model, location, condition, price, description } = req.body
  const { projection } = req
  //new Synth es el model
  const synth = new Synth({ title, image, buyOrSellIt, kindOfProduct, brand, model, location, condition, price, description})

//Creo que hay que cambiar la ruta del redirect!!
  synth
    .save()
    .then( synth => res.json(synth))

}

module.exports = addSynth