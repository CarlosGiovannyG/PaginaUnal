const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class BillsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverConfig.bills;
  }

  async CreateBills(credentials) {
    credentials = new Object(credentials);
   
    return await this.post('/', credentials);
  }
  
  async BillsAll() {
    
    return await this.get(`/`);
  }

  async BillById(billId) {

    return await this.get(`/${billId}`);
  }

  async BillUser(idUser) {   
    return await this.get(`/?idUser=${idUser}`);
  }

  async UpdateBills(input) {
    input = new Object(input);
    let idBill = input.id    
    return await this.put(`/${idBill}`, input);
  }

  async DeleteBills(billId) {

    return await this.delete(`/${billId}`);
  }
  
}

module.exports = BillsApi;