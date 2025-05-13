import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db: {
        DB_URI: process.env.DB_URI
    },
    server:{
        PORT: process.env.PORT
    },
    jwt:{
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRES: process.env.JWT_EXPIRES,
    },
    admin:{
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    },
    emailSender: {
        SENDER_EMAIL: process.env.SENDER_EMAIL,
        SENDER_PASSWORD: process.env.SENDER_PASSWORD,
    },
    cloudinary: {
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    }
}