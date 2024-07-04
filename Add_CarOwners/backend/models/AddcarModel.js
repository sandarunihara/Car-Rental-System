import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AddcarSchema = new Schema({
    Carname:{
        type : String,
        required: true
    },
    Fueltype:{
        type : String,
        required : true
    },
    Carnumber:{
        type : String,
        required:true
    },
    Price:{
        type : Number,
        required:true
    },
    Seat:{
        type:Number,
        required:true
    },

})

const Addcar = mongoose.model("Addcar",AddcarSchema);

export default Addcar;