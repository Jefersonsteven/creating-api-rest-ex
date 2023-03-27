
const { faker } = require('@faker-js/faker');

const userData = (limit) => {
  const userData = [];

  for (let i = 0; i < limit; i++) {
    userData.push({
      id: faker.random.numeric(6),
      name: faker.name.fullName(),
      year: faker.random.numeric(2),
      address: faker.address.buildingNumber(),
      country: faker.address.cityName(),
      image: faker.image.avatar(),
    });
  }

  return userData;
};

module.exports = userData;
