"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = (0, graphql_1.buildSchema)(`

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
//# sourceMappingURL=User.schem.js.map