const products = require('./products/routes/products');
const users = require('./users/routes/users');
const categories = require('./categories/routes/categories');
const express = require('express');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', products);
  router.use('/users', users);
  router.use('/categories', categories);
}

module.exports = routerApi;
