import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
// *********************************************************
import userrouters from './routers/users.router'
import './db-connection'
import { UserType } from './graphql/Schemes/User.schem'
import { Userresolvers } from './graphql/Resolvers/User';
// *********************************************************

const app = express()
const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    typeDefs: [UserType],
    resolvers: [Userresolvers]
});
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', userrouters)
async function startServer() {
    await server.start()
    server.applyMiddleware({ app });
    app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer();








