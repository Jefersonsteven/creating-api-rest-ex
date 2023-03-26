const products = require('./products/routes/products');
// TODO: const users = require('../users/routes/users');
const categories = require('./categories/routes/categories');

function routerApi(app) {
  app.use('/products', products);
  // TODO: app.use('/users', users);
  app.use('/categories', categories);
}

module.exports = routerApi;
