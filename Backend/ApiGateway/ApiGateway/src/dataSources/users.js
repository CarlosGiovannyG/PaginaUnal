const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class UsersApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverConfig.global;
  }

  async RegisterUser(input) {
    input = new Object(input); 
    
    return await this.post('/users/', input);
  }
  
  async LoginUser(credentials) {
    return await this.post('/login/', credentials);
  }
  
  async RefreshToken(credentials) {
    return await this.post('/refresh/', credentials);
  }

  async getUser(userId) {   
    return await this.get(`/users/${userId}`);
  }
   
  async LogoutUser(credentials) {       
    return await this.post('/logout/', credentials);
  }
  

}

module.exports = UsersApi;