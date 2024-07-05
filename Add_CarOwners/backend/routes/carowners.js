import express from "express";
import { AddcarOwner,getCarOwner,updateCarowner,deleteCarOwner,fetchCarOwner } from "../Controllers/CarOwnerController";

const router = express.Router();

router.post("/add",AddcarOwner);
router.get("/",getCarOwner);
router.put("/update/:id",updateCarowner);
router.delete("/delete/:id",deleteCarOwner);
router.get("/get/:id",fetchCarOwner);

export default router;