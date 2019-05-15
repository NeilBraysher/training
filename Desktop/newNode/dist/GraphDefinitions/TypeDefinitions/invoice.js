"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var account_1 = require("./account");
var mInvoice_1 = require("../../MongoDB/DatabaseTypes/mInvoice");
var Invoice = (function () {
    function Invoice() {
    }
    return Invoice;
}());
exports.Invoice = Invoice;
exports.typeDef = "\n    type Invoice {\n        name: String!\n        account: Account!\n        value: Int!\n    },\n\n    extend type Query {\n    getInvs(accountName: String!): [Invoice]\n    },\n\n    extend type Mutation {\n    addInv(name: String!, accountName: String!, value: Int!): Invoice\n    }\n";
exports.resolvers = {
    Query: {
        getInvs: function (root, args, context) {
            return getInvoices(args);
        }
    },
    Mutation: {
        addInv: function (root, args, context) {
            return addInvoices(args);
        }
    }
};
var getInvoices = function (args) {
    if (account_1.accs.length === 0) {
        return null;
    }
    ;
    var acc = account_1.accs.find(function (account) { return account.name === args.accountName; });
    if (acc !== null && acc !== undefined) {
        return acc.invoices;
    }
    return null;
};
var addInvoices = function (args) {
    if (account_1.accs.length === 0) {
        return null;
    }
    ;
    var acc = account_1.accs.find(function (account) { return account.name === args.accountName; });
    if (acc !== null && acc !== undefined) {
        return mInvoice_1.createNewInvoice(args.name, acc, args.value);
    }
    return null;
};
