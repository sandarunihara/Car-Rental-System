import Addcar from "../models/AddcarModel.js";
import { errorHandler } from "../utills/error.js";

export const Addcars = async(req,res,next)=>{
    const{Carname,Fueltype,Carnumber,Price,Seat,Location,Car_type} = req.body;
    if(!Carname || !Fueltype || !Carnumber || !Price || !Seat || !Location || !Car_type){
        next(errorHandler(400,'All field are required'));
    }

    const newCar = new Addcar({
        Carname,
        Fueltype,
        Carnumber,
        Price,
        Seat,
        Location,
        Car_type
    });

    try {
        await newCar.save();
        res.json('Added new car successfull!');
    } catch (error) {
        next(error);
    }
};

export const getcars = async(req,res,next)=>{
    Addcar.find().then((addcars)=>{
        res.json(addcars);
    }).catch((err)=>{
        console.log(err);
    })
};

export const updatecar = async(req,res,next)=>{
    let carId = req.params.id;
    const {Carname,Fueltype,Carnumber,Price,Seat,Location,Car_type}=req.body;
    
    const updatedcar={
        Carname,
        Fueltype,
        Carnumber,
        Price,
        Seat,
        Location,
        Car_type
    }
    await Addcar.findByIdAndUpdate(carId,updatedcar).then(()=>{
        next(errorHandler(200,"Car update successfull!"))
    }).catch((error)=>{
        next(error);
    })
};

export const deletecar =async(req,res,next)=>{
    let carId = req.params.id;

    await Addcar.findByIdAndDelete(carId,).then(()=>{
        res.json("Car delete Successfull!")
    }).catch((err)=>{
        console.log(err);
    })
};

export const fetchcar = async(req,res,next)=>{
    let carId = req.params.id;

    await Addcar.findById(carId).then((addcar)=>{
        res.json(addcar);
    }).catch((err)=>{
        console.log(err);
    })
}