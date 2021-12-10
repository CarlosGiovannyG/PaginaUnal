const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class MeasureUnitApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverConfig.measure;
  }


  async CreateMeasure(credentials) {
    credentials = new Object(credentials);

    return await this.post('/', credentials);
  }

  async MeasureAll() {

    return await this.get(`/`);
  }

  async MeasureById(measureId) {

    return await this.get(`/${measureId}`);
  }
  

  async UpdateMeasure(measureInput) {
    measureInput = new Object(measureInput);
    let measureId = measureInput.id
    
    return await this.put(`/${measureId}`, measureInput);
  }

  async DeleteMeasure(measureId) {

    return await this.delete(`/${measureId}`);
  }
}

module.exports = MeasureUnitApi;