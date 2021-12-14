import { gql } from '@apollo/client';


const Users = {

  LOGIN: gql`

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
`,

  LOGOUT: gql`
  mutation LogoutUser($credentials: Logout!) {
  LogoutUser(credentials: $credentials) {
    mensaje_sesion
    mensaje_token
  }
}
  `


}

// refresQuerys:[{NOMBRE QUERIES A REFRESCAR}]

export default Users