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
      return await dataSources.ProductsApi.CreateProduct(productInput);
    },
    
    UpdateProduct: async (_, { productInput }, { dataSources }) => {     
      return await  dataSources.ProductsApi.UpdateProduct(productInput);
    },  
    
    DeleteProduct: async (_, { producId }, { dataSources }) => {
      return await  dataSources.ProductsApi.DeleteProduct(producId.id);
    },

  }
  
}

module.exports = productsResolver;