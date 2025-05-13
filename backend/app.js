import express from "express";
import cookieParser from "cookie-parser";

//Import routes
import customersRoutes from "./src/routes/customersRoutes.js"


//settings
const app = express();
app.use(express.json());
app.use(cookieParser());

//Endpoints
app.use("/api/customers", customersRoutes);

export default app;