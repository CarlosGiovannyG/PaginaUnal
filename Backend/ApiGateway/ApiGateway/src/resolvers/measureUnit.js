const MeasurResolver = {

  Query: {
    MeasureById: async (_, { measureId }, { dataSources }) => {

      console.log(measureId.id)
      
      return dataSources.MeasureApi.MeasureById(measureId.id);
    },

    MeasureAll: async (_, { }, { dataSources }) => {

      return dataSources.MeasureApi.MeasureAll();
    },

  
  },

  Mutation: {

    CreateMeasure: async (_, { measureInput }, { dataSources }) => {
      return dataSources.MeasureApi.CreateMeasure(measureInput);
    },

    UpdateMeasure: async (_, { measureInput }, { dataSources }) => {

      return dataSources.MeasureApi.UpdateMeasure(measureInput);
    },
    
    DeleteMeasure: async (_, { measureId }, { dataSources }) => {

      return dataSources.MeasureApi.DeleteMeasure(measureId.id);
    },

  }
}

module.exports = MeasurResolver;