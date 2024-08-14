import { errorHandler } from "../utills/error.js";
import Addcar from "../models/AddcarModel.js";

// Add new car
export async function Addcars(req, res, next) {
  console.log(req.body);
  const {
    Carname,
    Fueltype,
    Carnumber,
    Price,
    Seat,
    Location,
    Car_type,
    CarImage,
  } = req.body;
  if (
    !Carname ||
    !Fueltype ||
    !Carnumber ||
    !Price ||
    !Seat ||
    !Location ||
    !Car_type
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const newCar = new Addcar({
    CarImage,
    Carname,
    Fueltype,
    Carnumber,
    Price,
    Seat,
    Location,
    Car_type,
  });

  try {
    await newCar.save();
    res.json("Added new car successfully!");
  } catch (error) {
    next(error);
  }
}

// Get all cars
export async function getcars(req, res, next) {
  try {
    const addcars = await Addcar.find();
    const totalcars = await Addcar.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthcars = await Addcar.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    res.json({
      addcars,
      totalcars,
      lastMonthcars,
    });
  } catch (error) {
    next(error);
  }
}

// Update car
export async function updatecar(req, res, next) {
  const carId = req.params.id;
  const { Carname, Fueltype, Carnumber, Price, Seat, Location, Car_type } =
    req.body;

  const updatedcar = {
    Carname,
    Fueltype,
    Carnumber,
    Price,
    Seat,
    Location,
    Car_type,
  };

  try {
    await Addcar.findByIdAndUpdate(carId, updatedcar);
    res.json("Car updated successfully!");
  } catch (error) {
    next(error);
  }
}

// Delete car
export async function deletecar(req, res, next) {
  const carId = req.params.id;

  try {
    await Addcar.findByIdAndDelete(carId);
    res.json("Car deleted successfully!");
  } catch (error) {
    next(error);
  }
}

// Fetch single car
export async function fetchcar(req, res, next) {
  const carId = req.params.id;

  try {
    const addcar = await Addcar.findById(carId);
    res.json(addcar);
  } catch (error) {
    next(error);
  }
}
