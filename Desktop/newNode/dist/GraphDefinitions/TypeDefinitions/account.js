"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mAccount_1 = require("../../MongoDB/DatabaseTypes/mAccount");
var Account = (function () {
    function Account(name) {
        this.name = name;
        this.invoices = [null];
    }
    return Account;
}());
exports.Account = Account;
exports.typeDef = "\n    type Account {\n        name: String\n        invoices: [Invoice]\n    },\n\n    extend type Query {\n        getAcc(name: String): [Account]\n    },\n\n    extend type Mutation {\n        addAcc(name: String): Account\n    }\n";
exports.resolvers = {
    Query: {
        getAcc: function (root, args, context) {
            var acc = getAccount(args);
            console.log('derp ' + acc);
            return acc;
        }
    },
    Mutation: {
        addAcc: function (root, args, context) { return addAcc(args); }
    }
};
var acc1 = { name: "derp", invoices: [null] };
exports.accs = [acc1];
var getAccount = function (args) {
    return mAccount_1.retrieveAccount(args.name);
};
var addAcc = function (args) {
    return mAccount_1.createNewAccount(args.name);
};
