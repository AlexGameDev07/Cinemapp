import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

import employeesMdl from "../models/employeesMdl.js";

const registerEmployeesCtrl = {};

registerEmployeesCtrl.registerEmployee = async (req, res) => {
    const {password, email, ...rest} = req.body;

    if (!password || !email) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (!config.jwt.JWT_SECRET){
        return res.status(500).json({ message: "JWT secret is not defined" });
    }

    try {
        //Verify if the employee is already registered
        const existingEmp = await employeesMdl.findOne({ email });
        if (existingEmp) {
            return res.status(400).json({ msg: "The employee already exists" });
        }

        // encrypt the password
        const salt = await bcryptjs.genSalt(10); // generate dynamic salt
        const hashPassword = await bcryptjs.hash(password, salt);

        // save the employee
        const newEmployee = new employeesMdl({
            ...rest, // Propagate the rest of the data
            email, // make sure the email is include
            password: hashPassword, // save the hashed password
        });

        await newEmployee.save();

        //* create the token
        try {
            const token = jsonwebtoken.sign(
                { id: newEmployee._id },
                config.jwt.JWT_SECRET,
                { expiresIn: config.jwt.JWT_EXPIRES }
            );
            res.cookie("authToken", token);
            return res.status(201).json({ msg: "Employee registered successfully", token });
        } catch (err) {
            return res.status(500).json({ msg: "Error generating token", error: err.message });
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

export default registerEmployeesCtrl;