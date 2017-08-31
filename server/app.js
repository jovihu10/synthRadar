const express = require('express')
const path = require("path")
const mongoose = require('mongoose')
mongoose.Promise = Promise
const bodyParser = require('body-parser')

const urlDB = 'mongodb://localhost:27017/test'
const app = express()
const PORT = process.env.PORT || 3002

mongoose.connect(urlDB)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, '../client')))

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  res.render('pages')
})
app.post('/', (req,res) => {
  res.render('pages')
})


app.get('/login', (req,res) => {
  res.render('pages/login')
})

app.get('/register', (req,res) => {
  res.render('pages/register')
})

app.get('/upload-product', (req,res) => {
  res.render('pages/upload-product')
})

app.get('/item', (req,res) => {
  res.render('pages/item')
})

app.get('/index', (req,res) => {
  res.render('pages/index')
})

app.get('/results', (req,res) => {
  res.render('pages/results')
})

//per a que em pasi el Json
app.get('/index', (req, res) => {
  synth.find().exec((err, synths) => {
    if (err) throw err
    console.log(synths)

    res.render('index', { synths })
  })
})





app.post('/', (req,res) => {
  res.render('pages')
})

app.post('/product', (req,res) => {
	console.log(req.body)

	// TODO recoger datos del nuevo producto del req body
	// TODO crear nuevo producto (a partir de modelo Product) y guardarlo en db
	// TODO canalizar el resultado para que se muestren los items
	//hacer pagina de usuario myProducts que muestre los productos filtrados de ese usuario en concreto
  //res.render('synth')
  res.send('ok')
})


// const synths = require('./handlers/byId')

// app.use('/synth', getById)


app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)