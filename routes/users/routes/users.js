const express = require('express');
const userData = require('../../../modules/users.js');
const users = express.Router();

users.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 2;
  res.json(userData(limit));
});


users.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = userData(20).find((user) => user.id === id);
  if (user) {
    return res.json(user);
  }
  res.json(`NOT FOUND: It product with id: ${id}, not exist`);
});

users.post('/', (req, res) => {
  const { body } = req;
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = users;
