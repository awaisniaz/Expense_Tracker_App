import { buildSchema } from 'graphql'
export const UserType = buildSchema(`
type User {
    first_name:String
    last_name:String
    email:String!,
    password:String!

}

input UserInput{
  first_name:String
  last_name:String
  email:String!,
  password:String!
}
  type Query {
    login(user:String):User
  }
`);