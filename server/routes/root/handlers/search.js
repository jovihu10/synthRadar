const Synth = require('../../../models/Synth')

function search(req, res) {
    const title = req.query.title

    Synth
        .find({ title: new RegExp(title, 'i') })
        .sort({ title: 1 })
        .exec(function(err, synths) {
            if (err) return res.send('error on search')

            if (synths.length === 0) return res.send('no results')

            res.send(synths)
        })
}

module.exports = search