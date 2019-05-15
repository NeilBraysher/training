"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var accountSchema = new mongoose.Schema({
    name: String,
    invoices: Array
});
var mAccount = mongoose.model('mAccount', accountSchema);
exports.createNewAccount = function (name) {
    var newAccount = new mAccount({
        name: name,
        invoices: null
    });
    newAccount.save()
        .then(function (doc) {
        console.log('doc ' + doc);
        return doc;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
};
exports.retrieveAccount = function (accountName) {
    mAccount.find({
        name: "" + accountName
    })
        .then(function (response) {
        console.log('resp ' + response);
        return response;
    }).catch(function (err) {
        console.error(err);
    });
};
