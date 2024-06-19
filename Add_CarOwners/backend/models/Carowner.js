const mangoose = require('mangoose');

const Schema = mangoose.Schema;

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


const Carowner = mongoose.model("Carowner",CarownerSchema);

module.exports = Carowner;