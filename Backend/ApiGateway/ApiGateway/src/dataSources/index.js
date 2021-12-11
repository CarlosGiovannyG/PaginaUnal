const UsersApi = require('./users')
const ProductsApi = require('./products')
const CategoryApi = require('./category')
const MeasureUnitApi = require('./measureUnit')
const BillsApi = require('./bilss')


const Api = {

  UsersApi: UsersApi,
  ProductsApi: ProductsApi,
  CategoryApi: CategoryApi,
  MeasureApi: MeasureUnitApi,
  BillsApi: BillsApi,
  
}

module.exports = Api;