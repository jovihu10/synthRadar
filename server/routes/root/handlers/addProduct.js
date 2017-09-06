const Synth = require('../../../models/Synth')

function addProduct(req, res) {
    const _synth = req.body
    const synth = new Synth(_synth)

    synth.save()
        .then(() => {
            res.redirect('/') // TODO put the correct route to redirect once saved
        })
}

module.exports = addProduct