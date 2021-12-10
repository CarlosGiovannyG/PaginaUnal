const { gql } = require("apollo-server");

const billsTypes = gql`
  
input CreateBills {
    id_user: Int!
    products: [idProducts]
  }

  input idBill {
    id: ID!
  }
  
  input idProducts {
    _id: ID
  }
  
  input idUser {
    id: ID
  }

  type BillsDetails {
    _id: ID
    id_user: Int
    products: [product]
    createdAt: String
    updatedAt: String    
  }

  type product {
     _id: ID
  }

  input BillsUpdate {
    id: ID!
    id_user: Int
    products: [idProducts]
   
  }
type DeleteBill {
    mensaje: String!
  }

   type Query {
     BillsAll: [BillsDetails!]
   BillById(billId: idBill!): BillsDetails!
   BillUser(idUser: idUser!): [BillsDetails!]
  }


  type Mutation {
    CreateBills(input: CreateBills!): BillsDetails!
     UpdateBills(input: BillsUpdate!): BillsDetails!
     DeleteBills(billId: idBill!): DeleteBill!
  }
`;

module.exports = billsTypes;
