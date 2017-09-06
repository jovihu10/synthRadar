const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showLogin = require('./handlers/showLogin')
const addProduct = require('./handlers/addProduct')
const search = require('./handlers/search')


// navigation routes

router.get('/', showHome)
router.get('/login', showLogin)

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.get('/results', (req, res) => {
    res.render('pages/results')
})

router.get('/item/:id', (req, res) => {
   const {id}= req.params

	// TODO use Synth model to retrieve the synth by id (use method .findById...)
	// TODO pass the synth found in db to render as a param

    res.render('pages/item')
})

router.get('/results', (req, res) => {
    res.render('pages/results')
})

router.get('/upload-product', (req, res) => {
    res.render('pages/upload-product')
})

// form routes

router.post('/upload-product', addProduct)

router.get('/search', search)

module.exports = router