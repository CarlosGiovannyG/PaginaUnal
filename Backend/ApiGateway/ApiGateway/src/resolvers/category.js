const categoriesResolver = {

  Query: {
    CategoryById: async (_, { categoryId }, { dataSources }) => {     
      return dataSources.CategoryApi.CategoryById(categoryId.id);
    },

    Categories: async (_, { }, { dataSources }) => {
      return dataSources.CategoryApi.Categories();
    },

  },


  Mutation: {

    CreateCategory: async (_, { categoryInput }, { dataSources }) => {
      return await dataSources.CategoryApi.CreateCategory(categoryInput);
    },

    
    UpdateCategory: async (_, { categoryInput }, { dataSources }) => {
      return await dataSources.CategoryApi.UpdateCategory(categoryInput);
    },
    
    DeleteCategory: async (_, { categoryId }, { dataSources }) => {
      return await dataSources.CategoryApi.DeleteCategory(categoryId.id);
    },

  }
  
}

module.exports = categoriesResolver;