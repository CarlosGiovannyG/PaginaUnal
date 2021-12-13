// import { gql, useQuery, useLazyQuery } from '@apollo/client';
// 
// 
// const Products = {
// 
//   UseProducts: () => {
// 
//     const ALL_PRODUCTS = gql`
//  query{
//     Products {
      
// 
// 
//     const allResults = useQuery(ALL_PRODUCTS)
// 
//     return allResults
// 
//     
//   },
//   
//   FindProduct: (idProduct) => {
// 
//     const FIND_PRODUCT = gql`
//  query ProductById($producSearch:String!){
//     ProductById(producId:$producSearch) {
//       name
//       description
//       price
//       image
//       category {
//         _id
//         name
//       }
//       measure_unit {
//         name
//         _id
//       }
//       _id
//     }
//  }
//   `
//     const [getProduct, result] = useLazyQuery(FIND_PRODUCT)
// 
//     getProduct({ variables: { producSearch: idProduct}})
// 
//     const resultProductById = result
//     console.log(result.data,'result')
//     console.log(idProduct,'idProduct')
//     return resultProductById
//   },
// 
// 
// 
// }
// 
// export default Products;
