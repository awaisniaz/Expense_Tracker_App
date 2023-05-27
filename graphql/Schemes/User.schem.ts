import { buildSchema } from 'graphql'
import { gql } from 'apollo-server-express';
export const UserType = buildSchema(`
type User {
    first_name:String
    last_name:String
    email:String
    password:String
}
type messageResponse {
  message:String

}
type Nulldata{
  data:String
}
type loginResponse { 
  data:User
  message:String,
  token:String
}
input UserInput{
  first_name:String
  last_name:String
  email:String
  password:String
}
type registerResponse{
  message:String
  status:String
}
type Query {
    login(user:UserInput): loginResponse
  }
type Mutation{
    register(user:UserInput): registerResponse
  }
`);