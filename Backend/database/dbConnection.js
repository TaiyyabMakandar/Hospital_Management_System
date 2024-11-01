import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(() => {
        console.log("connection successfully to db");
    }).catch((err) => {
        console.log("database connection failed", err);
    })
};

