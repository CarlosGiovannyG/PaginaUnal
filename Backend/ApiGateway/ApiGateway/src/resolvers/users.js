const usersResolver = {

  
  Query: {

    userDetailById: async (_, { userId }, { dataSources, userIdToken }) => {     
      if (userId == userIdToken) return await dataSources.UsersApi.getUser(userId);
      else return null;
    }

  },

  Mutation: {    

    RegisterUser: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.RegisterUser(input);
    },
    
    LoginUser: async (_, { credentials }, { dataSources }) => {
      return await dataSources.UsersApi.LoginUser(credentials);
    },
    
    RefreshToken: async (_, { credentials }, { dataSources, userIdToken }) => {      
      let userId = await dataSources.UsersApi.getUser(userIdToken)      
      if (userId.id == userIdToken) return await dataSources.UsersApi.RefreshToken(credentials);
      else return null;
    },

    LogoutUser: async (_, { credentials }, { dataSources, userIdToken }) => {      
      let userId = await dataSources.UsersApi.getUser(userIdToken)
      if (userId.id == userIdToken) return await dataSources.UsersApi.LogoutUser(credentials);
      else return null;
    },

  }

}

module.exports = usersResolver;