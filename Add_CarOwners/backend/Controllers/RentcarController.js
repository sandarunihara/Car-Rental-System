const carrentmodel = require("../models/CarRentModel")


async function rentcarController(req,res){
    try{
        const {name,nic,mobile,email,rent_date}=req.body

        const user=await carrentmodel.findOne({rent_date})

        if(user){
            throw new Error("Already rent this vehicle that day")
        }
        if(!name){
            throw new Error("Please provide name")
        }
        if(!nic){
            throw new Error("Please provide nic")
        }
        if(!mobile){
            throw new Error("Please provide Mobile Number")
        }
        if(!email){
            throw new Error("Please provide email")
        }
        if(!rent_date){
            throw new Error("Please provide rent date")
        }
        

        // create pin
        let numStr = nic.toString();
        let firstTwoDigits = numStr.slice(0, 2);
        let lastDigit = numStr.slice(-1);
        let randomDigit = Math.floor(Math.random() * 100);
        let pin = firstTwoDigits + lastDigit + randomDigit;

        const payload={
            ...req.body,
            pin:pin
        }

        const rentData=new carrentmodel(payload)
        const saveData=await rentData.save()

        res.status(200).json({
            data:saveData,
            success:true,
            error:false,
            message:"Car rent is successfully"
        })

    }catch(err){
        res.status(500).json({
            success:false,
            error:true,
            message:err.message
        })
    }
}

//read
async function carDetailscontroller(req,res){
    try{
        const nic=req.body
        const user=await carrentmodel.findOne(nic)

        res.status(200).json({
            message:"car details",
            data : user,
            error:false,
            success:true
        })
    }catch(err){
        res.status(400).json({
            message:err.message ||err,
            error: true,
            success : false
        })
    }
}

// update
async function updaterentcar(req,res){
    try{
        const {_id,...resBody}=req.body

        const updaterent=await carrentmodel.findByIdAndUpdate(_id,resBody)
        const newdata=await carrentmodel.findById(_id)

        res.status(200).json({
            message:"Rent update Successfully",
            data:newdata,
            success:true,
            error:false
        })
    }catch(err){
        res.status(400).json({
            message:err.message ||err,
            error: true,
            success : false
        })
    }
}

// delete
async function deleterentcontroller(req,res){
    try{
        const pin=req.body

        const deleteone=await carrentmodel.findOneAndDelete(pin)

        res.status(200).json({
            message:"Delete Successfully",
            data:deleteone,
            success:true,
            error:false
        })
    }catch(err){
        res.status(400).json({
            message:err.message ||err,
            error: true,
            success : false
        })
    }
}

module.exports=rentcarController
module.exports=carDetailscontroller
module.exports=updaterentcar
module.exports=deleterentcontroller