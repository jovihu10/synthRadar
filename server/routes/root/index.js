const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showLogin = require('./handlers/showLogin')
const addProduct = require('./handlers/addProduct')


router.get('/', showHome)
router.get('/login', showLogin)

router.get('/register', (req,res) => {
  res.render('pages/register')
})

router.get('/upload-product', (req,res) => {
  res.render('pages/upload-product')
})

router.get('/item', (req,res) => {
  res.render('pages/item')
})

router.get('/results', (req,res) => {
  res.render('pages/results')
})


router.post('/', (req,res) => {
  res.render('pages')
})

router.post('/product', (req,res) => {
	console.log(req.body)

	// TODO recoger datos del nuevo producto del req body
	// TODO crear nuevo producto (a partir de modelo Product) y guardarlo en db
	// TODO canalizar el resultado para que se muestren los items
	//hacer pagina de usuario myProducts que muestre los productos filtrados de ese usuario en concreto
  //res.render('synth')
  res.send('ok')
})

module.exports = router
