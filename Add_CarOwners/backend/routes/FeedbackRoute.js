const express=require("express");
const router = express.Router();

const addCommentcontroller = require("../Controllers/FeedbackController.js");
const displayCommentcontroller = require("../Controllers/FeedbackController.js");
const updateCommentcontroller = require("../Controllers/FeedbackController.js");
const deleteCommentcontroller = require("../Controllers/FeedbackController.js");

<<<<<<< HEAD
//feedback
=======
const rentcarController = require("../Controllers/RentcarController.js")
const carDetailscontroller = require("../Controllers/RentcarController.js")
const updaterentcar = require("../Controllers/RentcarController.js")
const deleterentcontroller = require("../Controllers/RentcarController.js")

//feedback

>>>>>>> 23d9d7a4fb0b91de0c2d51d1365e3883ff3eac53
router.post('/addfeedback',addCommentcontroller);
router.post('/displayfeedback',displayCommentcontroller);
router.put('/updatefeedback',updateCommentcontroller);
router.delete('/deletefeedback',deleteCommentcontroller);

// rentCar

router.post('/rentcar',rentcarController)
router.post('/displayrent',carDetailscontroller)
router.post('/updaterent',updaterentcar)
router.post('/deleterent',deleterentcontroller)



export default router;