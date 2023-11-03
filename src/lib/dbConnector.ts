import mongoose from "mongoose";
import express from 'express';

const app = express();

//database source
const MONGO_URI = process.env.DATABASE_URL!;


//connect database
const dbConnector = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB server Connected`);
    } catch (err){
        console.error("Connection to mongodb failed", );
        process.exit(1);
    }

}

dbConnector();

//database connection confermations
mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"));
mongoose.connection.on("open", (err) => console.log(err)); 

export default dbConnector;