const { Client } = require("./client.model");
const { Product } = require("./product.model");
const { productsData } = require("./productData");

const seed = async () => {
  await Product.create(productsData);
  await Client.create({
    id : 1 , 
    name : "farouk" , 
    email : "farouk@sfectoria.com" , 
    password : "0000" , 
    imageUrl : "ma andi"
  })
};

seed();
