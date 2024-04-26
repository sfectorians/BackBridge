const { fetchProduct, createProduct } = require("../controller/product.controller")

const productRouter = require("express").Router()


// routes/sample.js
/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *          [products]
 *     summary: Returns a all clients
 *     responses:
 *       200:
 *         description: A successful response
 */
productRouter.get("/",fetchProduct)



/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new client
 *     tags: [products]
 *     requestBody:
 *       description: product to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties: 
 *                 productName:
 *                   type:  string
 *                 price:
 *                   type: number
 *                 imageUrl:
 *                   type: string
 *                 description: 
 *                   type: string 
 *                 category: 
 *                   type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
productRouter.post("/",createProduct)


module.exports = productRouter