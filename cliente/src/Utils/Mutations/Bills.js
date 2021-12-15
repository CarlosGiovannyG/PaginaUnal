import { gql } from '@apollo/client';

const Bills = {

  FATURAR: gql`

mutation Facturar($input: CreateBills!) {
   CreateBills(input: $input) {
     _id
    user
    products {
      _id
    }
  }
  
}
`,

}



export default Bills