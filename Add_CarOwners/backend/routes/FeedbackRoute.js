import express from "express";

import {
  addCommentcontroller,
  displayCommentcontroller,
  updateCommentcontroller,
  deleteCommentcontroller,
  displayfeedbackIDcontroller,
} from "../Controllers/FeedbackController.js";

import {
  rentcarController,
  carDetailscontroller,
  updaterentcar,
  deleterentcontroller,
} from "../Controllers/RentcarController.js";

import {
  AddcarOwner,
  getCarOwner,
  updateCarowner,
  deleteCarOwner,
  fetchCarOwner,
} from "../Controllers/CarOwnerController.js";

import { signup, signin } from "../Controllers/authController.js";

import {
  Addcars,
  getcars,
  updatecar,
  deletecar,
  fetchcar,
} from "../Controllers/AddcarController.js";

import { searchcarController } from "../Controllers/SearchCarController.js";

const router = express.Router();

// Feedback routes
router.post("/addfeedback", addCommentcontroller);
router.get("/displayfeedback", displayCommentcontroller);
router.post("/displayfeedbackid", displayfeedbackIDcontroller);
router.put("/updatefeedback", updateCommentcontroller);
router.delete("/deletefeedback", deleteCommentcontroller);

// RentCar routes
router.post("/rentcar", rentcarController);
router.post("/displayrent", carDetailscontroller);
router.post("/updaterent", updaterentcar);
router.post("/deleterent", deleterentcontroller);

// Car owner routes
router.post("/addowner", AddcarOwner);
router.get("/getowners", getCarOwner);
router.put("/updateowner/:id", updateCarowner);
router.delete("/deleteowner/:id", deleteCarOwner);
router.get("/fetchowner/:id", fetchCarOwner);

// AddCustomer routes
router.post("/signup", signup);
router.post("/signin", signin);

// Car routes
router.post("/createcar", Addcars);
router.get("/getcars", getcars);
router.put("/updatecar/:id", updatecar);
router.delete("/deletecar/:id", deletecar);
router.get("/fetchcar/:id", fetchcar);

// Search route
router.post("/search", searchcarController);

export default router;
