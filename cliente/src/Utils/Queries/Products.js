import { gql } from '@apollo/client';

const Products = {

  ALL_PRODUCTS: gql`

 query{
    Products {
      name
      description
      price
      image
      category {
        _id
        name
      }
      measure_unit {
        name
        _id
      }
      _id
    }
  }
  `,


  FIND_PRODUCT: gql`
  
 query findProduct($producId: idProduct!) {
  ProductById(producId: $producId) {
   name
    description
    price
    image
    category {
      name
    }
    measure_unit {
      name
    }
    _id
  }
 }
  `,

}

export default Products