import mongoose from 'mongoose';

const rentschema = new mongoose.Schema({
    name: String,
    nic: String,
    mobile: Number,
    email: String,
    rent_date: Date,
    price: Number,
    // pin: Number,
    Carnumber: String,

    // // Extra bool
    // baby_seat: Boolean,
    // need_driver: Boolean,
});

const carrentmodel = mongoose.model("rent", rentschema);

export default carrentmodel;

