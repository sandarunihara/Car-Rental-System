import Carowner from "../models/Carowner";
import { errorHandler } from "../utills/error";

 export const AddcarOwner = async(req,res,next)=>{
    const name = req.body.name;
    const nic = req.body.nic;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    const newCarowner = new Carowner({
        name,
        nic,
        age,
        gender,
        address
    })

    newCarowner.save().then(()=>{
        res.json("Car Owner Added")
    }).catch((err)=>{
        console.log(err);
    })

};

export const getCarOwner = async(req,res,next)=>{
    Carowner.find().then((carowners) =>{
        res.json(carowners)
    }).catch((err) =>{
        console.log(err)
    })
};

export const updateCarowner = async(req,res,next)=>{
    let userId = req.params.id;
    const {name,nic,age,gender,address} = req.body;

    const updateCarowner = {
        name,
        nic,
        age,
        gender,
        address
    }

    const update = await Carowner.findByIdAndUpdate(userId,updateCarowner).then(() =>{
        res.status(200).send({status : "user updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with updating data"});
    })

};

export const deleteCarOwner = async (req,res,next)=>{
    let userId = req.params.id;
    
    await Carowner.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status : "user deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user" , error : err.message});
    })
}

export const fetchCarOwner = async (req,res,next)=>{
    let userId = req.params.id;
    await Carowner.findById(userId).then((carowner) =>{
        res.status(200).send({status : "user fetched" , carowner})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user" , error : err.message});
    })
}



