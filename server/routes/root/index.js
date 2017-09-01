const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showLogin = require('./handlers/showLogin')
const addProduct = require('./handlers/addProduct')


// navigation routes

router.get('/', showHome)
router.get('/login', showLogin)

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.get('/search-results', (req, res) => {
    res.render('pages/search-results')
})

router.get('/item', (req, res) => {
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

module.exports = router