import express, { Express, Request, Response , Application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { CorsOptions } from 'cors';
import dotenv from 'dotenv';

//For env File 
dotenv.config();
//import database
import "./lib/dbConnector";

const app = express();
export const port = process.env.PORT || 9002;
export const url = process.env.URL || `http://localhost:${port}`;



export default app;
