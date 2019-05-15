"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("./GraphDefinitions/schema");
var apollo_server_1 = require("apollo-server");
var server = new apollo_server_1.ApolloServer({ schema: schema_1.schema });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var mongoose = require('mongoose');
var mserver = '127.0.0.1:27017';
var database = 'rikkiTikkiTavi';
var Database = (function () {
    function Database() {
        this._connect();
    }
    Database.prototype._connect = function () {
        mongoose.connect("mongodb://" + mserver + "/" + database)
            .then(function () {
            console.log('Database connection successful');
        })
            .catch(function (err) {
            console.error('Database connection error');
        });
    };
    return Database;
}());
exports.rikkiTikkiTavi = new Database();
