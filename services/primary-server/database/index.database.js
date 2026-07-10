import mongoose from "mongoose";

export async function connectToDb(){
    try{
        const MONGODB_URL = process.env.MONGODB_URL;
        return await mongoose.connect(MONGODB_URL);
    }
    catch(error){
        console.log("Error connecting to database");
        throw new Error("Cannot Connect to database",Error.captureStackTrace);
    }
}