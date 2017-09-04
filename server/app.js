const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const urlDB = process.env.URI_DB || 'mongodb://admin:admin@ds157833.mlab.com:57833/synthradar' 

//const urlDB = 'mongodb://admin:admin@ds157833.mlab.com:57833/synthradar' // TODO when deploying in heroku, take into account an env var (e.g. const urlDB = process.env.URI_DB || 'mongodb://...)

//const urlDB = 'mongodb://localhost:27017/synthdata'

const app = express()

const rootRoutes = require('./routes/root/')

mongoose.Promise = Promise
mongoose.connect(urlDB, { useMongoClient: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(rootRoutes)

module.exports = app