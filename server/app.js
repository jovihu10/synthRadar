const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const urlDB = 'mongodb://localhost:27017/test'
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