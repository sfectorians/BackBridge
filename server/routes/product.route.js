const {
  fetchProduct,
  createProduct
} = require("../controller/product.controller");

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
productRouter.post("/", createProduct);

module.exports = productRouter;
