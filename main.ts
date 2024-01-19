import { ApolloServer } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";
import { GraphQLError } from "npm:graphql@^16.8.1";
import mongoose from "npm:mongoose@7.6.3";

const MONGO_URL = Deno.env.get("MONGO_URL");

if(!MONGO_URL){
    throw new Error("No mongo url found");
}

try{
    await mongoose.connect(MONGO_URL);
    console.log("Conectado a Mongo");
}catch(_e){
    throw new Error("Error al conectarse a Mongo");
}

const server = new ApolloServer({typeDefs,
                                 resolvers: {
                                    Query,
                                    Mutation,
                                 },
                                });

const { url } = await startStandaloneServer(server);
console.info(`Servidor listo en ${url}`);