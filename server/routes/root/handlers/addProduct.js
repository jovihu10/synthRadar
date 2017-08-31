function addProduct (req,res) {
	console.log(req.body)

	// TODO recoger datos del nuevo producto del req body
	// TODO crear nuevo producto (a partir de modelo Product) y guardarlo en db
	// TODO canalizar el resultado para que se muestren los items
	//hacer pagina de usuario myProducts que muestre los productos filtrados de ese usuario en concreto
  //res.render('synth')
  res.send('ok')
}

module.exports = addProduct