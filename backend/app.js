import express from "express";
import cookieParser from "cookie-parser";

//Import routes

//settings
const app = express();
app.use(express.json());
app.use(cookieParser());

//Endpoints

export default app;