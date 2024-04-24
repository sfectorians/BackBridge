const { fetchProduct, createProduct } = require("../controller/product.controller")

const productRouter = require("express").Router()



productRouter.get("/",fetchProduct)
productRouter.post("/",createProduct)


module.exports = productRouter