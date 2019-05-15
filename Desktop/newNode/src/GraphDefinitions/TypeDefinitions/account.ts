import { Invoice } from './invoice';
import { createNewAccount, retrieveAccount, outerResponse } from '../../MongoDB/DatabaseTypes/mAccount'

// typescript definition
export class Account {
    name: string;
    invoices: [Invoice];
    constructor(name: string){
        this.name = name;
        this.invoices = [null];
    }
}


// graphQL type definition
export const typeDef: string = `
    type Account {
        name: String
        invoices: [Invoice]
    },

    extend type Query {
        getAcc(name: String): [Account]
    },

    extend type Mutation {
        addAcc(name: String): Account
    }
`;

// graphQL resolvers
export const resolvers = {
    Query: {
        getAcc: (root, args, context) => {
            let acc = getAccount(args);
            console.log('derp ' + acc);
            return acc;
        }
    },
    Mutation: {
        addAcc: (root, args, context) => addAcc(args)
    } 
}

// crude DB standin / local methods 
const acc1: Account = { name : "derp", invoices: [null]};
export const accs:  Array<Account> = [acc1];

const getAccount = (args) => {
    return retrieveAccount(args.name);
}

const addAcc = (args) => {
    return createNewAccount(args.name);
}


    