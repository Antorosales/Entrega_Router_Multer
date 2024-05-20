const agregarProducto = async(req,res)=>{
    
  const products = [];
  const {titleProduct,description,priceProduct,codeProduct,stockProduct,categoryProduct,thumnails}= req.body

  // const data = req.body

  // data.statusProduct = true
  // console.log(data)

 
  const newProducto= {id: products.length+1, title: titleProduct, description:description, price : priceProduct, status: true,stock:stockProduct,category:categoryProduct,thumnails:thumnails,code:codeProduct}
  products.push(newProducto)
  console.log(newProducto)
  res.json({message:"producto agregado"})
}

const mostrarProductos = async(req,res)=>{
    const products = [];
    res.json(products)
}

module.exports = {agregarProducto,mostrarProductos}