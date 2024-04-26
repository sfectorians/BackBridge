const express = require("express");
const router = require("./routes/client.route");
const productRouter = require("./routes/product.route");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require("./models/main")
const PORT = 4001;
const host = "127.0.0.1";

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: ['./routes/client.route.js','./routes/product.route.js'], // Path to your API routes
};
const specs = swaggerJsdoc(options);
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.use("/clients",router)
app.use("/products",productRouter)

app.listen(PORT, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
