const { ApolloServer } = require('apollo-server');

const serverConfig = require('./server');
const fetch = require('node-fetch');
const { ApolloError } = require('apollo-server-errors');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const Api = require('./dataSources');


const server = new ApolloServer({
 
  context: async ({ req }) => {    
    const token = req.headers.authorization || '';

    if (token == '') return { UserIdToken: null }
    else {

      let auth = 'Token' + ' ' + token
      let response = await fetch(
        serverConfig.acces,
        {
          method: 'POST',
          headers: { "Authorization": auth },
          redirect: 'follow'
        }
      )
      if (response.status == 200) return (await response.json())
      else throw new ApolloError((await response.json()).error, 401);
}
   
  },
  typeDefs,
  resolvers,

  dataSources: () => ({
    UsersApi: new Api.UsersApi(),
    ProductsApi:new Api.ProductsApi(),
    CategoryApi: new Api.CategoryApi(),
    MeasureApi: new Api.MeasureApi(),
    BillsApi: new Api.BillsApi(),
  }),

  introspection: true,

  playground: true

});




server.listen(process.env.PORT || 4000)
  .then(({ url }) => {
    console.log(` Servidor está corriendo en ${url}`);
  })