const productsResolver = {

  Query: {
    ProductById: async (_, { producId }, { dataSources }) => {
      
      return await dataSources.ProductsApi.ProductById(producId.id);
    },
    
    Products: async (_, {  }, { dataSources }) => {
     
      return await dataSources.ProductsApi.Products();
    },
    
  },
  
  
  Mutation: {
    
    CreateProduct: async (_, { productInput }, { dataSources }) => {
      return dataSources.ProductsApi.CreateProduct(productInput);
    },
    
    UpdateProduct: async (_, { productInput }, { dataSources }) => {
     
      return dataSources.ProductsApi.UpdateProduct(productInput);
    },  
    
    DeleteProduct: async (_, { producId }, { dataSources }) => {

      return dataSources.ProductsApi.DeleteProduct(producId.id);
    },

  }
}

module.exports = productsResolver;