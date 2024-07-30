import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"
import AddcarRoute from "./routes/AddcarRoute.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongodb Connection success!");
});


app.use("/api/user",authRoutes);
app.use("/api/addcar",AddcarRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error('Error:', err);  // Log the error details
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
});

