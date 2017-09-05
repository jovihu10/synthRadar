// mongoose setup

const mongoose = require('mongoose')
mongoose.Promise = Promise
const urlDB = process.env.URI_DB || 'mongodb://admin:admin@ds157833.mlab.com:57833/synthradar' 
//const urlDB = 'mongodb://admin:admin@ds157833.mlab.com:57833/synthradar' // TODO when deploying in heroku, take into account an env var (e.g. const urlDB = process.env.URI_DB || 'mongodb://...)
//const urlDB = 'mongodb://localhost:27017/synthdata'
mongoose.connect(urlDB, { useMongoClient: true })

// express setup

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const path = require("path")
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

const rootRoutes = require('./routes/root/')
app.use(rootRoutes)

module.exports = app