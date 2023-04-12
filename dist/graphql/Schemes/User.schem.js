"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = (0, graphql_1.buildSchema)(`
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
//# sourceMappingURL=User.schem.js.map