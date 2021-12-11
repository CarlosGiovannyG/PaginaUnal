const { gql } = require("apollo-server");

const categoriesTypes = gql`

  input CreateCategory {
    name: String!
    description: String
  }

  type CreatedDetail {
    name: String!
    description: String
    _id: ID!
    createdAt: String
    updatedAt: String
  }

  input idCategory {
    id: String!
  }

  type CategoryDetail {
    name: String!
    description: String   
    _id: ID!
    createdAt: String
    updatedAt: String
  }

  type DeleteCategory {
    mensaje: String!
  }

  input CategoryUpdate {
    name: String
    description: String
    id: String!
  }

   type Query {
    CategoryById(categoryId: idCategory!): CategoryDetail!
    Categories: [CategoryDetail!]
  }

  
  type Mutation {
    CreateCategory(categoryInput: CreateCategory!): CreatedDetail!
    DeleteCategory(categoryId: idCategory!): DeleteCategory!
    UpdateCategory(categoryInput: CategoryUpdate!): CategoryDetail!
  }
  
`;

module.exports = categoriesTypes;
