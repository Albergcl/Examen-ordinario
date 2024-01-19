export const typeDefs = `#graphql
    type Contact {
        id: ID!
        name: String!
        tlf: String!
        pais: String!
        hora: String!
    }

    type Query { 
        contacts: [Contact!]!
        contact(id: ID!): Contact!
    }

    type Mutation {
        addContact(name: String!, tlf: String!): Contact!
        deleteContact(id: ID!): Contact!
        updateContact(id: ID!, name: String!, tlf: String!): Contact!
    }`;