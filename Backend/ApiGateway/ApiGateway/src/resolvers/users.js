const usersResolver = {

  Query: {
    userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
     
      if (userId == userIdToken) return dataSources.UsersApi.getUser(userId);
      else return null;
    }
  },

  Mutation: {    

    RegisterUser:async (_, { input }, { dataSources }) => {
      return dataSources.UsersApi.RegisterUser(input);
    },
    
    LoginUser:async (_, { credentials }, { dataSources }) => {
      return dataSources.UsersApi.LoginUser(credentials);
    },
    
    RefreshToken: async (_, { credentials }, { dataSources, userIdToken }) => {
      
      let userId = await dataSources.UsersApi.getUser(userIdToken)
      
      if (userId.id == userIdToken) return dataSources.UsersApi.RefreshToken(credentials);
      else return null;
    },

    LogoutUser: async (_, { credentials }, { dataSources, userIdToken }) => {
      
      let userId = await dataSources.UsersApi.getUser(userIdToken)

      if (userId.id == userIdToken) return dataSources.UsersApi.LogoutUser(credentials);
      else return null;
    },

  }
}

module.exports = usersResolver;