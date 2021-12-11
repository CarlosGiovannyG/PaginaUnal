const MeasurResolver = {

  Query: {
    MeasureById: async (_, { measureId }, { dataSources }) => {
      return dataSources.MeasureApi.MeasureById(measureId.id);
    },

    MeasureAll: async (_, { }, { dataSources }) => {
      return dataSources.MeasureApi.MeasureAll();
    },

  
  },

  Mutation: {

    CreateMeasure: async (_, { measureInput }, { dataSources }) => {
      return await dataSources.MeasureApi.CreateMeasure(measureInput);
    },

    UpdateMeasure: async (_, { measureInput }, { dataSources }) => {
      return await dataSources.MeasureApi.UpdateMeasure(measureInput);
    },
    
    DeleteMeasure: async (_, { measureId }, { dataSources }) => {
      return await dataSources.MeasureApi.DeleteMeasure(measureId.id);
    },

  }

}

module.exports = MeasurResolver;