import Addcar from "../models/AddcarModel.js";
import { errorHandler } from "../utills/error.js";

async function Addcars(req,res,next){
    const{Carname,Fueltype,Carnumber,Price,Seat} = req.body;
    if(!Carname || !Fueltype || !Carnumber || !Price || !Seat){
        next(errorHandler(400,'All field are required'));
    }

    const newCar = new Addcar({
        Carname,
        Fueltype,
        Carnumber,
        Price,
        Seat,
    });

    try {
        await newCar.save();
        res.json('Added new car successfull!');
    } catch (error) {
        next(error);
    }
};

async function getcars(req,res,next){
    Addcar.find().then((addcars)=>{
        res.json(addcars);
    }).catch((err)=>{
        console.log(err);
    })
};

async function updatecar(req,res,next){
    let carId = req.params.id;
    const {Carname,Fueltype,Carnumber,Price,Seat}=req.body;
    
    const updatedcar={
        Carname,
        Fueltype,
        Carnumber,
        Price,
        Seat
    }
    await Addcar.findByIdAndUpdate(carId,updatedcar).then(()=>{
        next(errorHandler(200,"Car update successfull!"))
    }).catch((error)=>{
        next(error);
    })
};

async function deletecar(req,res,next){
    let carId = req.params.id;

    await Addcar.findByIdAndDelete(carId,).then(()=>{
        res.json("Car delete Successfull!")
    }).catch((err)=>{
        console.log(err);
    })
};
async function fetchcar(req,res,next){
    let carId = req.params.id;

    await Addcar.findById(carId).then((addcar)=>{
        res.json(addcar);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = Addcars
module.exports = getcars
module.exports = updatecar
module.exports = deletecar
module.exports = fetchcar
