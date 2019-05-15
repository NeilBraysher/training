import mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    name: String,
    account: {},
    value: Number
})

const mInvoice = mongoose.model('mInvoice', invoiceSchema);

export const createNewInvoice = (name, account, value) => {
    
    let newInvoice = new mInvoice({
        name: name,
        account: account,
        value: value
    })

    newInvoice.save()
        .then(doc => {
            console.log(doc);
            return doc;    
        })
        .catch(err => {
            console.error(err)
            return err;
        })
    
}



