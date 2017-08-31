const synths = require(__base + '/data/synths.json')

function showHome (req, res) {
  res.render('pages/index')
}

module.exports = showHome
