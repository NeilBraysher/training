import mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: String,
    invoices: Array
})

const mAccount = mongoose.model('mAccount', accountSchema);

export const createNewAccount = (name) => {
    
    let newAccount = new mAccount({
        name: name,
        invoices: null
    })

    newAccount.save()
        .then(doc => {
            console.log(doc);
            return doc;    
        })
        .catch(err => {
            console.error(err)
            return err;
        })
    
}