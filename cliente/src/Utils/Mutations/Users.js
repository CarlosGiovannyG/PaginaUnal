import { gql, useMutation } from '@apollo/client';





const Users = {

  LOGIN:gql`

mutation LoginUser($credentials: LoginUser!) {
  LoginUser(credentials: $credentials) {
     token
    mensaje
    user {
      username
      email
      name
      id
    }
  }
}
`


}

// refresQuerys:[{NOMBRE QUERIES A REFRESCAR}]

export default Users