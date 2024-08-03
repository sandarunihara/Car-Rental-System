import carrentmodel from "../models/CarRentModel.js";

export async function rentcarController(req, res) {
    try {
        const { name, nic, mobile, email, rent_date,price,Carnumber } = req.body;

        const user = await carrentmodel.findOne({ rent_date });

        if (user) {
            throw new Error("Already rented this vehicle that day");
        }
        if (!name) {
            throw new Error("Please provide name");
        }
        if (!nic) {
            throw new Error("Please provide NIC");
        }
        if (!mobile) {
            throw new Error("Please provide Mobile Number");
        }
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!rent_date) {
            throw new Error("Please provide rent date");
        }

        // Create pin
        // let numStr = nic.toString();
        // let firstTwoDigits = numStr.slice(0, 2);
        // let lastDigit = numStr.slice(-1);
        // let randomDigit = Math.floor(Math.random() * 100);
        // let pin = firstTwoDigits + lastDigit + randomDigit;

        const payload = {
            ...req.body
            // pin: pin
        };

        const rentData = new carrentmodel(payload);
        const saveData = await rentData.save();

        res.status(200).json({
            data: saveData,
            success: true,
            error: false,
            message: "Car rent is successful"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: true,
            message: err.message
        });
    }
}

// Read
export async function carDetailscontroller(req, res) {
    try {
        const  nic  = req.body;
        const user = await carrentmodel.find(nic);

        if (!user) {
            throw new Error("No rent");
        }

        res.status(200).json({
            message: "Car details",
            data: user,
            error: false,
            success: true
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

// Update
export async function updaterentcar(req, res) {
    try {
        const { _id, ...resBody } = req.body;

        const updaterent = await carrentmodel.findByIdAndUpdate(_id, resBody);
        const newdata = await carrentmodel.findById(_id);

        res.status(200).json({
            message: "Rent updated successfully",
            data: newdata,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

// Delete
export async function deleterentcontroller(req, res) {
    try {
        const { pin } = req.body;

        const deleteone = await carrentmodel.findOneAndDelete({ pin });

        res.status(200).json({
            message: "Delete successful",
            data: deleteone,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}




