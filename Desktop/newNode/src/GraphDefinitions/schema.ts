// import type schemas
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDef as accountDefinitions, resolvers as accountResolvers } from './TypeDefinitions/account';
import { typeDef as invoiceDefinitions, resolvers as invoiceResolvers } from './TypeDefinitions/invoice';

// root query / resolvers requiring extension in modularised types
const Query = `
    type Query {
        _empty: String
    },
    type Mutation {
        _empty: String
    }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [ Query, accountDefinitions, invoiceDefinitions ],
    resolvers: merge(resolvers, accountResolvers, invoiceResolvers),
});