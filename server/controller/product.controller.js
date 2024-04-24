const {products} = require("../models/products.model")


const fetchProduct = (req,res)=>{
    res.status(200).send(products)
}


module.exports = {fetchProduct}