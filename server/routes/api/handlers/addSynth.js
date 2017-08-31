const Synth = require(__base + '/models/Synth')

function addSynth(req, res) {
    const { title, category, size } = req.body

    const bike = new Bike({ title, buyOrSellIt, kindOfProduct, brand, image, model, location, condition, price, description, createdAt })

    synth.save()
        .then(synth => res.json(synth))
}

module.exports = addSynth