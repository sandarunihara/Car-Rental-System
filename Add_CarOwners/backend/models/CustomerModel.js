import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;