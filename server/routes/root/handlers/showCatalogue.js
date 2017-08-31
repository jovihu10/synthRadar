const Synth = require( __base + '/models/Synth')

function handlerCatalogue (req, res) {
  Synth.find()
    .then(synths => res.render('pages/index', { synths }) )
}

module.exports = handlerCatalogue
