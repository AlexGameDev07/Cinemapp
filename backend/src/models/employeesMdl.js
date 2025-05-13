/**
 * Parameters:
 * name: string
 * email: string
 * telephone: string
 * address: string
 * position: string
 * hireDate: timestamp
 * salary: number
 * active: boolean
 */

import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    hireDate: { // Cambiado de contratationDate a hireDate
        type: Date,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        strict: false,
    }
);
export default model("Employee", employeeSchema);