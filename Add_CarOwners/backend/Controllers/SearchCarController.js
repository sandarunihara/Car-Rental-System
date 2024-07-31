const { default: Addcar } = require("../models/AddcarModel")


async function searchcarController(req,res){
    try{
        const {date,location,car_type}=req.body

        const cars=await Addcar.find({location,car_type})

        


    }catch(err){
        res.status(500).json({
            success:false,
            error:true,
            message:err.message
        })
    }
}