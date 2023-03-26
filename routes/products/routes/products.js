
const productsData = require('../../../modules/products');
const express = require('express');
const products = express.Router();

products.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 5;
  res.json(productsData(limit));
});

products.get('/filter', (req, res) => {
  res.json('I am filter');
});

products.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productsData(100).find((product) => product.id === id);
  if (product) {
    return res.json(product);
  }
  res.json(`NOT FOUND: It product with id: ${id}, not exist`);
});

module.exports = products;
