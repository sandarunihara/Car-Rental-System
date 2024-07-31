import express from 'express';
import {
  addCommentcontroller,
  displayCommentcontroller,
  updateCommentcontroller,
  deleteCommentcontroller
} from '../Controllers/FeedbackController.js';

import {
  rentcarController,
  carDetailscontroller,
  updaterentcar,
  deleterentcontroller
} from '../Controllers/RentcarController.js';

import {
  AddcarOwner,
  getCarOwner,
  updateCarowner,
  deleteCarOwner,
  fetchCarOwner
} from '../Controllers/CarOwnerController.js';

import { signup, signin } from '../Controllers/authController.js';

import {
  Addcars,
  getcars,
  updatecar,
  deletecar,
  fetchcar
} from '../Controllers/AddcarController.js';

const router = express.Router();

// Feedback routes
router.post('/addfeedback', addCommentcontroller);
router.post('/displayfeedback', displayCommentcontroller);
router.put('/updatefeedback', updateCommentcontroller);
router.delete('/deletefeedback', deleteCommentcontroller);

// RentCar routes
router.post('/rentcar', rentcarController);
router.post('/displayrent', carDetailscontroller);
router.post('/updaterent', updaterentcar);
router.post('/deleterent', deleterentcontroller);

// Car owner routes
router.post('/addowner', AddcarOwner);
router.get('/getcar', getCarOwner);
router.put('/update/:id', updateCarowner);
router.delete('/delete/:id', deleteCarOwner);
router.get('/get/:id', fetchCarOwner);

// AddCustomer routes
router.post('/signup', signup);
router.post('/signin', signin);

// Car routes
router.post('/createcar', Addcars);
router.get('/getcar', getcars);
router.put('/updatecar/:id', updatecar);
router.delete('/deletecar/:id', deletecar);
router.get('/fetchcar/:id', fetchcar);

export default router;























// const express=require("express");
// const router = express.Router();


// //feedback

// const addCommentcontroller = require("../Controllers/FeedbackController.js");
// const displayCommentcontroller = require("../Controllers/FeedbackController.js");
// const updateCommentcontroller = require("../Controllers/FeedbackController.js");
// const deleteCommentcontroller = require("../Controllers/FeedbackController.js");

// router.post('/addfeedback',addCommentcontroller);
// router.post('/displayfeedback',displayCommentcontroller);
// router.put('/updatefeedback',updateCommentcontroller);
// router.delete('/deletefeedback',deleteCommentcontroller);

// // rentCar
// const rentcarController = require("../Controllers/RentcarController.js")
// const carDetailscontroller = require("../Controllers/RentcarController.js")
// const updaterentcar = require("../Controllers/RentcarController.js")
// const deleterentcontroller = require("../Controllers/RentcarController.js")


// router.post('/rentcar',rentcarController)
// router.post('/displayrent',carDetailscontroller)
// router.post('/updaterent',updaterentcar)
// router.post('/deleterent',deleterentcontroller)


// // Car owner
// const AddcarOwner = require("../Controllers/CarOwnerController.js")
// const getCarOwner = require("../Controllers/CarOwnerController.js")
// const updateCarowner = require("../Controllers/CarOwnerController.js")
// const deleteCarOwner = require("../Controllers/CarOwnerController.js")
// const fetchCarOwner = require("../Controllers/CarOwnerController.js")


// router.post('/addowner',AddcarOwner)
// router.get('/getcar',getCarOwner)
// router.put('/update/:id',updateCarowner)
// router.delete('/delete/:id',deleteCarOwner)
// router.get('/get/:id',fetchCarOwner)

// // AddCustomer
// const signup = require("../Controllers/authController.js")
// const signin = require("../Controllers/authController.js")

// router.post("/signup",signup);
// router.post("/signin",signin);

// // Car owner
// const Addcars = require("../Controllers/AddcarController.js")
// const getcars = require("../Controllers/AddcarController.js")
// const updatecar = require("../Controllers/AddcarController.js")
// const deletecar = require("../Controllers/AddcarController.js")
// const fetchcar = require("../Controllers/AddcarController.js")

// router.post("/createcar",Addcars);
// router.get("/getcar",getcars);
// router.put("/updatecar/:id",updatecar);
// router.delete("/deletecar/:id",deletecar)
// router.get("/fetchcar/:id",fetchcar);


// export default router;


