const {faker} = require('@faker-js/faker');

class Products {
  constructor() {
    this.products = []
    this.generate()
  }

  generate(){
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.random.numeric(6),
        image: faker.image.imageUrl(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(300, 500, 2, '$'),
        categories: faker.commerce.department(),
      });
    }
  }

  indexOf(id) {
    let index;
    this.products.forEach((product, i) => {
      if (product.id === id) {
        index = i
      };
    });
    return index;
  }

  create(body){
    this.products.push(body);
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find((product) => product.id === id);
  }

  update(id, body){
    const index = this.indexOf(id);
    this.products.splice(index, 1, body);
  }

  updatePart(id, body){
    const index = this.indexOf(id);
    const temp = this.products[index];
    this.products.splice(index, 1, { ...temp, ...body });
  }

  delete(id){
    const index = this.indexOf(id);
    this.products.splice(index, 1);
  }
}

module.exports = Products;
