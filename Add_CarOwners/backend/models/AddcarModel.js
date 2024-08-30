import mongoose from 'mongoose';

const AddcarSchema = new mongoose.Schema({
    CarImage:{
        type: [String],
        default:['https://thumbs.dreamstime.com/b/art-illustration-326303269.jpg'],
    },
    Carname: {
        type: String,
        required: true
    },
    Fueltype: {
        type: String,
        required: true
    },
    Carnumber: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Seat: {
        type: Number,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Car_type: {
        type: String,
        required: true
    },
    OwnerId:{
        type: String,
        required: true
    }
});

const Addcar = mongoose.model('Addcar', AddcarSchema);

export default Addcar;
















// const mongoose=require('mongoose');

// const AddcarSchema = new mongoose.Schema({
//     Carname:{
//         type : String,
//         required: true
//     },
//     Fueltype:{
//         type : String,
//         required : true
//     },
//     Carnumber:{
//         type : String,
//         required:true
//     },
//     Price:{
//         type : Number,
//         required:true
//     },
//     Seat:{
//         type:Number,
//         required:true
//     },
//     Location:{
//         type:String,
//         required:true
//     },
//     Car_type:{
//         type:String,
//         required:true
//     }

// })

// const Addcar = mongoose.model("Addcar",AddcarSchema);

// module.exports=Addcar