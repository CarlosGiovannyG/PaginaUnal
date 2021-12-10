const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class CategoryApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverConfig.categories;
  }

  async CreateCategory(credentials) {
    credentials = new Object(credentials);

    return await this.post('/', credentials);
  }

  async CategoryById(categoryId) {

    return await this.get(`/${categoryId}`);
  }

  async Categories() {

    return await this.get(`/`);
  }

  async UpdateCategory(categoryInput) {
    categoryInput = new Object(categoryInput);
    let categoryId = categoryInput.id
    console.log(categoryId)
    return await this.put(`/${categoryId}`, categoryInput);
  }

  async DeleteCategory(categoryId) {

    return await this.delete(`/${categoryId}`);
  }
}

module.exports = CategoryApi;