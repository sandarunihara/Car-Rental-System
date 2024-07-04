import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CarownerSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    nic : {
        type : String,
        require : true
    },

    age : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    }

})
//1234567890

const Carowner = mongoose.model("Carowner",CarownerSchema);

export default Carowner;