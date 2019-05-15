import { schema } from './GraphDefinitions/schema';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({ schema });

// cannot define this type - appollo URL setup
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

let mongoose = require('mongoose');
const mserver = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'rikkiTikkiTavi';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${mserver}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}

export const rikkiTikkiTavi = new Database();