import { gql } from '@apollo/client';


const Users = {

  REGISTER: gql`

mutation registerUser($input: RegisterUser!) {
  RegisterUser(input: $input) {
    mensaje
  }
}
`,
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


export default Users