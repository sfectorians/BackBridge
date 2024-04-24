const express = require("express");
const router = require("./routes/client.route");
const productRouter = require("./routes/product.route");
const PORT = 4001;
const host = "127.0.0.1";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.use("/clients",router)
app.use("/products",productRouter)

app.listen(PORT, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
