const express = require('express')
const bodyParser = require('body-parser')
const asyncify = require('express-asyncify');
var admin = require('firebase-admin');
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import models from './src/db';
//Mezclar archivos de types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/resolvers')));
//

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})
// API ENDPOINTS pruebas
const app = express();

app.use('/graphql', express.json(), graphqlExpress({ 
    schema: myGraphQLSchema,
    context: {
        models
    } 
}));




const port = 3000

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
/*     admin.initializeApp({
        credential: admin.credential.cert("aqui va el key de firebase"),
        databaseURL: "url"
      }); */
    
})