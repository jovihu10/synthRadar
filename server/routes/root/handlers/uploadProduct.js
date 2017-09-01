/*
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
*/



var Synth = mongoose.model('Synth', synthsSchema);

var small = new Tank({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
})

// or

Tank.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
})

module.exports = uploadProduct