/**
 * Parameters:
 * title: string
 * description: string
 * director: string
 * genre: stringArray
 * releaseDate: number
 * duration: number
 * imgUrl: string
 */

import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    releaseDate: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
        strict: false,
    }
);

export default model("Movie", movieSchema);