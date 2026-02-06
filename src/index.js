// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// import express from "express";
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR:", error)
//         throw err
//     }
// })()

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import connectDB from './db/index.js';
import { DB_NAME } from './constants.js';

dotenv.config({
    path: './env'
});
// console.log("Mongo URL:", process.env.MONGODB_URL);


connectDB();


