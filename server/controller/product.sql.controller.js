const db = require("../models/sqlConnection");

const fetchProduct = (req, res) => {
  let sql = "select * from products";
  db.query(sql, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(result);
  });
};

const createProduct = (req, res) => {
  let sql = "insert into products set ?";
  db.query(sql, req.body, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(201).send(result);
  });
};

module.exports = { fetchProduct, createProduct };
