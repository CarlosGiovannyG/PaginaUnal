const billsResolver = {

  Query: {
    
    BillsAll: async (_, { }, { dataSources }) => { 
      return await dataSources.BillsApi.BillsAll();
    },

    BillById: async (_, { billId }, { dataSources }) => {
      return await dataSources.BillsApi.BillById(billId.id);
    },

    BillUser: async (_, { idUser }, { dataSources, userIdToken  }) => {     
      if (idUser.id == userIdToken) return await dataSources.BillsApi.BillUser(idUser.id)
      else return null;
    },

  },

  Mutation: {

    CreateBills: async (_, { input }, { dataSources }) => {      
      return await dataSources.BillsApi.CreateBills(input);
    },

    UpdateBills: async (_, { input }, { dataSources }) => {
      return await dataSources.BillsApi.UpdateBills(input);
    },

    DeleteBills: async (_, { billId }, { dataSources }) => {
      return await dataSources.BillsApi.DeleteBills(billId.id);
    },
    
  }

}

module.exports = billsResolver;