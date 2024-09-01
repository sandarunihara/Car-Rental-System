import carrentmodel from "../models/CarRentModel.js";


export async function RentcarDetailscontroller(req, res) {
    try {
        const  OwnerId  = req.body;
        const user = await carrentmodel.find(OwnerId);

        if (user.length===0) {
            throw new Error("No rent");
        }

        res.status(200).json({
            message: "Owner details",
            data: user,
            error: false,
            success: true
        });
    } catch (err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}
