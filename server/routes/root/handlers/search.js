const Synth = require('../../../models/Synth')

function search(req, res) {
    const title = req.query.title

    Synth
    	//Regex para que lo coja aunque los campos no
        .find({ title: new RegExp(title, 'i') })
        //Para ordenarlo en orden descendiente
        .sort({ title: 1 })
        .exec(function(err, synths) {
            if (err) return res.send('error on search')

            if (synths.length === 0) return res.send('no results')

            res.render('pages', {synths})

        })
}

module.exports = search