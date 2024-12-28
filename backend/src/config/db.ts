import mongoose from "mongoose";
import { MONGODB_CONNECTION_STRING } from "../constants/env";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("Error while connecting to MongoDB: ", error);
        process.exit(1);
    }
};
