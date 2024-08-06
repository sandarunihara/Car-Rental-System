import Addcar from "../models/AddcarModel.js";
import carrentmodel from "../models/CarRentModel.js";

export async function searchcarController(req, res) {
    try {
        const rent_date = req.body[0];
        const Location = req.body[1];
        const car_type = req.body[2];

        const cars = await Addcar.find(Location, car_type );
        console.log(cars);

        const rentcar=await carrentmodel.find(rent_date)
        console.log(rentcar);

        // Create a set of car numbers from rentcar
        const rentcarNumbers = new Set(rentcar.map(rc => rc.Carnumber));

       // Filter the cars array
        const availableCars = cars.filter(car => !rentcarNumbers.has(car.Carnumber));

        res.status(200).json({
            success: true,
            error: false,
            data: availableCars,
            searchDetails: {
                rent_date,
                Location,
                car_type
            }
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: true,
            message: err.message
        });
    }
}