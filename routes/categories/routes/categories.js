
const productsData = require('../../../modules/products');
const express = require('express');
const categories = express.Router();

categories.get('/:categoryID/products', (req, res) => {
  const { categoryID } = req.params;
  const { productID } = req.query;
  if (productID) {
    const product = productsData(100).filter(
      (product) =>
        product.categories.toLowerCase() === categoryID &&
        product.id === productID
    );
    if (product[0]) {
      return res.json(product);
    }
    res.json(
      `NOT FOUND: It product with category: ${categoryID} and id: ${productID}, not exist`
    );
  } else {
    const productsFilter = productsData(100).filter(
      (product) => product.categories.toLowerCase() === categoryID
    );
    if (productsFilter[0]) {
      return res.json(productsFilter);
    }
    res.json(`NOT FOUND: It product with category: ${categoryID}, not exist`);
  }
});

module.exports = categories;
