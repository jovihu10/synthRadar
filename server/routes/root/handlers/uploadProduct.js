
app.post('/upload-product', (req, res) => {
  const _synth = req.body
  const synth = new Synth(_synth)
    console.log(req.body.drumboxSampler)
  synth.save()
    .then(() => {
    
      res.redirect('/index')
    })
})

module.exports = uploadProduct