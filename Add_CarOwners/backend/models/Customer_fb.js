import mongoose from 'mongoose';

const { Schema } = mongoose;

const customer_fbSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Carnumber: {
        type: String,
        required: true
    }
    
});

const Customer_fb = mongoose.model("Customer_fb", customer_fbSchema);

export default Customer_fb;





