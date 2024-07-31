import Carowner from '../models/Carowner.js';
import { errorHandler } from '../utills/error.js';

// Add car owner
export async function AddcarOwner(req, res, next) {
    const { name, nic, age, gender, address } = req.body;

    const newCarowner = new Carowner({
        name,
        nic,
        age: Number(age),
        gender,
        address
    });

    try {
        await newCarowner.save();
        res.json("Car Owner Added");
    } catch (err) {
        next(errorHandler(500, err.message));
    }
}

// Get all car owners
export async function getCarOwner(req, res, next) {
    try {
        const carowners = await Carowner.find();
        res.json(carowners);
    } catch (err) {
        next(errorHandler(500, err.message));
    }
}

// Update car owner
export async function updateCarowner(req, res, next) {
    const userId = req.params.id;
    const { name, nic, age, gender, address } = req.body;

    const updateCarowner = { name, nic, age: Number(age), gender, address };

    try {
        await Carowner.findByIdAndUpdate(userId, updateCarowner);
        res.status(200).send({ status: "user updated" });
    } catch (err) {
        next(errorHandler(500, err.message));
    }
}

// Delete car owner
export async function deleteCarOwner(req, res, next) {
    const userId = req.params.id;

    try {
        await Carowner.findByIdAndDelete(userId);
        res.status(200).send({ status: "user deleted" });
    } catch (err) {
        next(errorHandler(500, err.message));
    }
}

// Fetch single car owner
export async function fetchCarOwner(req, res, next) {
    const userId = req.params.id;

    try {
        const carowner = await Carowner.findById(userId);
        res.status(200).send({ status: "user fetched", carowner });
    } catch (err) {
        next(errorHandler(500, err.message));
    }
}









// const Carowner = require("../models/Carowner.js");
// const { errorHandler } = require("../utills/error.js");

// async function AddcarOwner(req,res,next){
//     const name = req.body.name;
//     const nic = req.body.nic;
//     const age = Number(req.body.age);
//     const gender = req.body.gender;
//     const address = req.body.address;

//     const newCarowner = new Carowner({
//         name,
//         nic,
//         age,
//         gender,
//         address
//     })

//     newCarowner.save().then(()=>{
//         res.json("Car Owner Added")
//     }).catch((err)=>{
//         console.log(err);
//     })

// };

// async function getCarOwner (req,res,next){
//     Carowner.find().then((carowners) =>{
//         res.json(carowners)
//     }).catch((err) =>{
//         console.log(err)
//     })
// };

// async function updateCarowner (req,res,next){
//     let userId = req.params.id;
//     const {name,nic,age,gender,address} = req.body;

//     const updateCarowner = {
//         name,
//         nic,
//         age,
//         gender,
//         address
//     }

//     const update = await Carowner.findByIdAndUpdate(userId,updateCarowner).then(() =>{
//         res.status(200).send({status : "user updated"})
//     }).catch((err) =>{
//         console.log(err);
//         res.status(500).send({status : "Error with updating data"});
//     })

// };

// async function deleteCarOwner (req,res,next){
//     let userId = req.params.id;
    
//     await Carowner.findByIdAndDelete(userId).then(() =>{
//         res.status(200).send({status : "user deleted"})
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status : "Error with delete user" , error : err.message});
//     })
// }

// async function fetchCarOwner (req,res,next){
//     let userId = req.params.id;
//     await Carowner.findById(userId).then((carowner) =>{
//         res.status(200).send({status : "user fetched" , carowner})
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status : "Error with get user" , error : err.message});
//     })
// }


// module.exports = AddcarOwner
// module.exports = getCarOwner
// module.exports = updateCarowner
// module.exports = deleteCarOwner
// module.exports = fetchCarOwner


