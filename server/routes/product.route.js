const {
  fetchProduct,
  createProduct
} = require("../controller/product.sql.controller");

const productRouter = require("express").Router();


/**
 * @swagger
 * /products:
 *   get:
 *     tags: [products]
 *     summary: fetch all products
 *     responses: 
 *       200:
 *         description: successfull response
 */
productRouter.get("/", fetchProduct);
/**
 * @swagger
 * /products:
 *   post:
 *     tags : [products]
 *     summary: post a client
 *     requestBody:
 *       description: add a client
 *       required: true 
 *       content:
 *         application/json:
 *           schema:
 *             type: object 
 *             properties:
 *               productName:
 *                 type: string 
 *               description: 
 *                 type: string
 *               price: 
 *                 type: number
 *               imageUrl:
 *                 type: string
 *               category: 
 *                 type: string
 *     responses:
 *       201:
 *         description: client created with success       
 */
productRouter.post("/", createProduct);

module.exports = productRouter;
