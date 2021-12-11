const { gql } = require("apollo-server");

const measureUnitTypes = gql`
  input CreateMeasure {
    name: String!
    description: String
  }

  type CreateDetaill {
    name: String!
    description: String
    _id: ID!
    createdAt: String
    updatedAt: String
  }

  input idMeasure {
    id: String!
  }

  type MeasureDetail {
    name: String!
    description: String   
    _id: ID!
    createdAt: String
    updatedAt: String
  }

input MeasureUpdate {
    name: String
    description: String
    id: String!
  }

  type DeleteMeasure {
    mensaje: String!
  }

  type Query {
   MeasureById(measureId: idMeasure!): MeasureDetail!
   MeasureAll: [MeasureDetail!]
  }

  type Mutation {
    CreateMeasure(measureInput: CreateMeasure!): CreateDetaill!
    UpdateMeasure(measureInput: MeasureUpdate!): MeasureDetail!
    DeleteMeasure(measureId: idMeasure!): DeleteMeasure!
  }
  
`;

module.exports = measureUnitTypes;
