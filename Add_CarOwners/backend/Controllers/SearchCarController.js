import Addcar from "../models/AddcarModel.js";

export async function searchcarController(req, res) {
    try {
        const { date, location, car_type } = req.body;

        // You might want to add date filtering here if needed
        const cars = await Addcar.find({ location, car_type });

        res.status(200).json({
            success: true,
            error: false,
            data: cars
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: true,
            message: err.message
        });
    }
}




// const { default: Addcar } = require("../models/AddcarModel")


// async function searchcarController(req,res){
//     try{
//         const {date,location,car_type}=req.body

//         const cars=await Addcar.find({location,car_type})

        


//     }catch(err){
//         res.status(500).json({
//             success:false,
//             error:true,
//             message:err.message
//         })
//     }
// }