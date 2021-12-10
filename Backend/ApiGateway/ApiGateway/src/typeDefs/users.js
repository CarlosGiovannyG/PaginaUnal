const { gql } = require('apollo-server');

const usersType = gql`
 input RegisterUser {
        username: String!
        name: String!
        second_name: String!
        last_name: String!
        phone: String!
        email: String!
        password: String!
    }

 type RegisterDetail {
        mensaje: String!
       
    }
   
    input LoginUser {
        username: String!
        password: String!
    }

    type LoginDetail {
       token: String!
       mensaje: String!
    }

    input Refresh{
        username: String!
    }

    type RefreshDetail{
        token: String!
    }

    type UserDetail {
        username: String!
        email: String!
        name: String!
        last_name: String!
        id: ID!
        second_name: String!
        phone: String!
    }

    input Logout{
        token: String!
    }

    type LogoutDetail{
        mensaje_sesion: String!
        mensaje_token: String!
       
    }

    type Query {
        userDetailById(userId: Int!): UserDetail
    }

    type Mutation {       
        RegisterUser(input: RegisterUser!): RegisterDetail!      
        LoginUser(credentials: LoginUser!): LoginDetail!       
        RefreshToken(credentials: Refresh!): RefreshDetail!       
       LogoutUser(credentials: Logout!): LogoutDetail!       
    }
`;

module.exports = usersType;