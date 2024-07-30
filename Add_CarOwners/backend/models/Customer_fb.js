const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customer_fbSchema = new Schema({
    comment : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const Customer_fb = mongoose.model("Customer_fb",customer_fbSchema);

module.exports = Customer_fb;