import Addcar from "../models/AddcarModel.js";
import carrentmodel from "../models/CarRentModel.js";

export async function searchcarController(req, res) {
    try {
        const { Location, Car_type, rent_date } = req.body;
        

        const cars = await Addcar.find({ Location,Car_type});
        

        const rentcar=await carrentmodel.find({ rent_date })
        

         // Create a set of car numbers from rentcar
         const rentcarNumbers = new Set(rentcar.map(rc => rc.Carnumber));

        // Filter the cars array
        const availableCars = cars.filter(car => !rentcarNumbers.has(car.Carnumber));
        

        res.status(200).json({
            success: true,
            error: false,
            data: availableCars
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: true,
            message: err.message
        });
    }
}