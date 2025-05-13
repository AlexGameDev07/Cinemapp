/**
 * Parameters:
 * name: string
 * email: string
 * telephone: string
 * address: string
 * active: boolean
 */
import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
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
export default model("Customer", customerSchema);