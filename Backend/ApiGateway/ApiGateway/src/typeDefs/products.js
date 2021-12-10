const { gql } = require("apollo-server");

const productsTypes = gql`
  
input CreateProduct {
    name: String!
    description: String!
    price: Int!
    image: String!
    category:String!
    measure_unit: String!
  }

  type CreateDetail {
     name: String!
    description: String!
    price: Int!
    image: String!
    category: String!
    measure_unit: String!
    _id: ID!
    createdAt: String!
    updatedAt: String!
    
  }

  input idProduct {
    id: String!
  }

  type ProductDetail {
    name: String
    description: String
    price: Int
    image: String
    category: Category
    measure_unit: MeasureUnit
    _id: ID!
    createdAt: String
    updatedAt: String
  }

  type MeasureUnit{
       _id:ID
        name:String
  }
  
  type Category{
       _id:ID
        name:String
  }
  

  type DeleteProduct{
      mensaje:String!
  }

  input ProductUpdate {
    name: String
    description: String
    price: Int
    image: String
    category: String
    measure_unit: String
    id: String!    
  }

  type Query {
    ProductById(producId: idProduct!): ProductDetail!
    Products: [ProductDetail!]
  }

  type Mutation {
    CreateProduct(productInput: CreateProduct!): CreateDetail!
    DeleteProduct(producId: idProduct!):DeleteProduct!
    UpdateProduct(productInput: ProductUpdate!):ProductDetail!
  }
`;

module.exports = productsTypes;
