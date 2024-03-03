import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

    try {
         mongoose.connect(process.env.DB_URL)
        console.log("Database connected succesfully")
    } catch (error) {
        console.log("Error connection to Database",error.message)
    }


export default mongoose


