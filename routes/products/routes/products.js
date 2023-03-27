
// const productsData = require('../../../modules/products');
// const staticProducts = require('../../../modules/staticProducts');
const Products = require('../services/products');
const newProducts = new Products();
const express = require('express');
const products = express.Router();

products.get('/', (req, res) => {
  res.status(200).json(newProducts.find());

  // res.status(500).json({
  //   message: `Sorry, products are not loading, please try again.`,
  // })
});

products.get('/filter', (req, res) => {
  res.status(200).json('I am filter');
});

products.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(newProducts.findOne(id));

  // res.status(404).json({
  //   message: `NOT FOUND: It product with id: ${id}, not exist`,
  // });
});

products.post('/create', (req, res) => {
  const { body } = req;

  newProducts.create(body);
  res.status(201).json({
    message: 'created',
    data: body,
  });

  // res.status(500).json({
  //   message: `It product not created`,
  // });
});


products.put('/update/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;

  newProducts.update(id, body);
  res.status(202).json({
    message: 'update',
    data: body,
  });

  // res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
});

products.patch('/update2/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;

  newProducts.updatePart(id, body);
  res.status(202).json({
    message: 'update2',
    data: body,
  });

  // res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
});

products.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  newProducts.delete(id);
  res.status(200).json({
    message: 'deleted',
    id,
  });

  // res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
});

module.exports = products;
