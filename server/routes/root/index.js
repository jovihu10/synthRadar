const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showLogin = require('./handlers/showLogin')
const addProduct = require('./handlers/addProduct')
const search = require('./handlers/search')
//Para enviar la info cuando hacemos el +info de un producto en concreto
const Synth = require('../../models/Synth')
const sendmail = require('./handlers/sendEmail')

// navigation routes

router.get('/', showHome)
router.get('/login', showLogin)

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.get('/results', (req, res) => {
    res.render('pages/results')
})
//Para la info de un producto en concreto

router.get('/item/:id', (req, res) => {
    const { id } = req.params

    Synth
        .findById(id)
        .then(synth => res.render('pages/item', { synth }))
        .catch(err => {
            throw err

        })
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