const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverConfig.products;
  }

  async CreateProduct(credentials) {
    credentials = new Object(credentials);
    
    return await this.post('/', credentials);
  }
  
  async ProductById(producId) {
   
    return await this.get(`/${producId}`);
  }
  
  async Products() {
    
    return await this.get('/');
  }
  
  async UpdateProduct(productInput) {
    productInput = new Object(productInput);
    let producId = productInput.id
   
    return await this.put(`/${producId}`,productInput);
  }

  async DeleteProduct(producId) {

    return await this.delete(`/${producId}`);
  }

}

module.exports = ProductsApi;