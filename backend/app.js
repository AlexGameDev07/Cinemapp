import express from "express";
import cookieParser from "cookie-parser";

//Import routes
import customersRoutes from "./src/routes/customersRoutes.js"
import emloyeesRoutes from "./src/routes/employeesRoutes.js"
import moviesRoutes from "./src/routes/moviesRoutes.js"
import loginRoutes from "./src/routes/loginRoutes.js"
import logoutRoutes from "./src/routes/logoutRoutes.js"


//settings
const app = express();
app.use(express.json());
app.use(cookieParser());

//Endpoints
app.use("/api/customers", customersRoutes);
app.use("/api/employees", emloyeesRoutes);
app.use("/api/movies", moviesRoutes);

app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
export default app;