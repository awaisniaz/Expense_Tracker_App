"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
// *********************************************************
const users_router_1 = __importDefault(require("./routers/users.router"));
require("./db-connection");
const User_schem_1 = require("./graphql/Schemes/User.schem");
const User_1 = require("./graphql/Resolvers/User");
// *********************************************************
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: [User_schem_1.UserType],
    resolvers: [User_1.Userresolvers]
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', users_router_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.start();
        server.applyMiddleware({ app });
        app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
    });
}
startServer();
// app.use((req, res, next) => {
//     res.status(200).send({ message: 'Api is not found in system' });
// });
//# sourceMappingURL=index.js.map