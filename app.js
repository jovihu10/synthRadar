const express = require('express')
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3002



app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  res.render('pages')
})


app.get('/login', (req,res) => {
  res.render('pages/login')
})

app.get('/register', (req,res) => {
  res.render('pages/register')
})

app.get('/uploadProduct', (req,res) => {
  res.render('pages/uploadProduct')
})

app.get('/items', (req,res) => {
  res.render('pages/items')
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)