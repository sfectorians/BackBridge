const express = require("express");
// const router = require("./routes/client.route");
const productRouter = require("./routes/product.route");
require("./models/sqlConnection")
const PORT = 4001;
const cors = require("cors");
const host = "127.0.0.1";
(swaggerJsdoc = require("swagger-jsdoc")), (swaggerUi = require("swagger-ui-express"));

const app = express();
app.use(express.json());
app.use(cors());
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com"
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/clients", router);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
