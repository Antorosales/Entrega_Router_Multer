const express = require("express");
const { agregarProducto, mostrarProductos } = require("../controller/products.controller.js");
const router = express.Router()
const products = [];


router.get("/products",mostrarProductos)
//get debe generar un listado de los productos de la base incluteno ?limit 

//get debe traer solo el producto con el id proporcionado

//post debera generar un nuevo producto con los campos

    //id:number autoincremental
    //title:string
    //description: string
    //code:string 
    //price:number
    //status:boolean
    //stock:number
    //category:string
    //thumnails: array de string que contenga ruta de imagenes almacenadas 
    // status es tru por defecto
    //todos los campos deben ser obligatorio a excepcion deñ thumbnails

//El put /:pid debera tomar un producto y actualizarlo por los campos enviados desde body , no se debe eilimar el id



router.post('/products',agregarProducto);

// Encontrar producto por id

router.get("/products/:id", (req, res)=>{
  const productId = parseInt(req.params.id)
  const products = products.find((products)=>products.id === productId)
})

module.exports = router

