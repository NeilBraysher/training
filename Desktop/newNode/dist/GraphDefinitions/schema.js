"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var graphql_tools_1 = require("graphql-tools");
var account_1 = require("./TypeDefinitions/account");
var invoice_1 = require("./TypeDefinitions/invoice");
var Query = "\n    type Query {\n        _empty: String\n    },\n    type Mutation {\n        _empty: String\n    }\n";
var resolvers = {};
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: [Query, account_1.typeDef, invoice_1.typeDef],
    resolvers: lodash_1.merge(resolvers, account_1.resolvers, invoice_1.resolvers),
});
