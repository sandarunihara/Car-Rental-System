const router = require("express").Router();
const Carowner = require("../models/Carowner.js");

//CREATE
router.route("/add").post((req,res) =>{

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

})

//READ
router.route("/").get((req,res) =>{

    Carowner.find().then((carowners) =>{
        res.json(carowners)
    }).catch((err) =>{
        console.log(err)
    })

})

//UPDATE
router.route("/update/:id").put(async (req,res) =>{

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

})

//DELETE
router.route("/delete/:id").delete(async (req,res) =>{

    let userId = req.params.id;
    
    await Carowner.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status : "user deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user" , error : err.message});
    })

})

router.route("/get/:id").get(async (req,res) =>{

    let userId = req.params.id;
    await Carowner.findById(userId).then((carowner) =>{
        res.status(200).send({status : "user fetched" , carowner})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user" , error : err.message});
    })

})
// hello
module.exports = router;