
// const productsData = require('../../../modules/products');
const staticProducts = require('../../../modules/staticProducts');
const express = require('express');
const products = express.Router();

products.get('/', (req, res) => {
  // const { size } = req.query;
  // const limit = size || 5;
  res.status(200).json(staticProducts);
});

products.get('/filter', (req, res) => {
  res.status(200).json('I am filter');
});

products.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = staticProducts.find((product) => product.id === id);
  if (product) {
    return res.status(200).json(product);
  }
  res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
});

products.post('/create', (req, res) => {
  const { body } = req;
  res.status(201).json({
    message: 'created',
    data: body
  })
  try {
    staticProducts.push(body);
  } catch (error) {
    res.status(500).json({message: `It product not created`});
  }
})


products.put('/update/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  res.status(202).json({
    message: 'update',
    data: body,
  });

  let index;
  staticProducts.forEach((product, i) => {
    if (product.id === id) {
      index = i
    };
  });

  if(!index) {
    return res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
  }

  staticProducts.splice(index, 1, body);
});

products.patch('/update2/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  res.status(202).json({
    message: 'update2',
    data: body,
  });

  let index;
  staticProducts.forEach((product, i) => {
    if (product.id == id) {
      index = i
    };
  });

  if(!index) {
    return res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
  }

  const temp = staticProducts[index];
  staticProducts.splice(index, 1, {...temp, ...body });
});

products.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  let index;
  staticProducts.forEach((product, i) => {
    if (product.id === id) {
      index = i
    };
  });

  if(!index) {
    return res.status(404).json({message: `NOT FOUND: It product with id: ${id}, not exist`});
  }

  res.status(200).json({
    message: 'deleted',
    id,
  });

  staticProducts.splice(index, 1);
});

module.exports = products;
