const lodash = require('lodash');


const usersResolver = require('./users.js');
const productsResolver = require('./products.js');
const categoriesResolver = require('./category.js');
const MeasurResolver = require('./measureUnit');
const billsResolver = require('./bilss');


const resolvers = lodash.merge(
  usersResolver,
  productsResolver,
  categoriesResolver,
  MeasurResolver,
  billsResolver,
);

module.exports = resolvers;