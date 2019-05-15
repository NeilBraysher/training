import { accs } from './account';
import { Account } from './account';
import { createNewInvoice } from '../../MongoDB/DatabaseTypes/mInvoice'
import { from } from 'apollo-link';

export class Invoice {
    name: string;
    account: Account;
    value: number;
}

export const typeDef: string =   `
    type Invoice {
        name: String!
        account: Account!
        value: Int!
    },

    extend type Query {
    getInvs(accountName: String!): [Invoice]
    },

    extend type Mutation {
    addInv(name: String!, accountName: String!, value: Int!): Invoice
    }
`;
    
export const resolvers = {
    Query: {
        getInvs: (root, args, context) => {
            return getInvoices(args);
        }
    },
    Mutation: {
        addInv: (root, args, context) => {
            return addInvoices(args)
        }
    }
}

const getInvoices = (args) => {
    if(accs.length === 0){ return null };
    const acc = accs.find( account => account.name === args.accountName);
    if(acc !== null && acc !== undefined){
        return acc.invoices;
    }
    return null;
}

const addInvoices = (args) => {
    if(accs.length === 0){ return null };
    const acc = accs.find( account => account.name === args.accountName);
    if(acc !== null && acc !== undefined){
        return createNewInvoice(args.name, acc, args.value);
        // const inv = {name: args.name, account: acc, value: args.value}
        // acc.invoices.push(inv);
        // return inv;
    }
    return null;
}
