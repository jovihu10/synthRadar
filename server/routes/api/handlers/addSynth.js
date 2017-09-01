const Synth = require(__base + '/models/Synth')

function addSynth(req, res) {
    const { title, category, size } = req.body

    const synth = new Synth({ title, buyOrSellIt, kindOfProduct, brand, image, model, location, condition, price, description, createdAt })

    synth.save()
        .then(synth => res.json(synth))
}

module.exports = addSynth