const { fetchProduct } = require("../controller/product.controller")

const productRouter = require("express").Router()



productRouter.get("/",fetchProduct)


module.exports = productRouter