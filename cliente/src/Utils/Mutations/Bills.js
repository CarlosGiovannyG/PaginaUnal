import { gql } from '@apollo/client';


const Bills = {

  FATURAR: gql`

mutation Facturar($input: CreateBills!) {
   CreateBills(input: $input) {
     _id
    id_user
    products {
      _id
    }
  }
  
}
`,

 

}

// refresQuerys:[{NOMBRE QUERIES A REFRESCAR}]

export default Bills