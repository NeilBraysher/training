"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var invoiceSchema = new mongoose.Schema({
    name: String,
    account: {},
    value: Number
});
var mInvoice = mongoose.model('mInvoice', invoiceSchema);
exports.createNewInvoice = function (name, account, value) {
    var newInvoice = new mInvoice({
        name: name,
        account: account,
        value: value
    });
    newInvoice.save()
        .then(function (doc) {
        console.log(doc);
        return doc;
    })
        .catch(function (err) {
        console.error(err);
        return err;
    });
};
