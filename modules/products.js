
const { faker } = require('@faker-js/faker');

const productsData = (limit) => {
  const productsData = [];

  for (let i = 0; i < limit; i++) {
    productsData.push({
      id: faker.random.numeric(6),
      image: faker.image.imageUrl(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(300, 500, 2, '$'),
      categories: faker.commerce.department(),
    });
  }

  return productsData;
};

module.exports = productsData;
