import { gql } from '@apollo/client';

const Users = {

  USER_DETAIL: gql`
  
 query findUser($userId: Int!) {
 userDetailById(userId: $userId) {
    username
      email
      name
      last_name
      id
      second_name
      phone
  }
 }
  `,

}

export default Users