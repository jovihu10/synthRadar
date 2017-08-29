const Synth = require('../../../models/Synth')

function byId (req,res) {

  const { id } = req.params
  const { projection } = req

  Restaurant
    .findById(id , projection)
    .then( synth => {
      res.json(synth)
    })

}

module.exports = byId