import moviesMdl from "../models/moviesMdl.js";
import {v2 as cloudinary} from 'cloudinary';

import {config} from "../config.js";

cloudinary.config({
    cloud_name: config.cloudinary.CLOUDINARY_NAME,
    api_key: config.cloudinary.CLOUDINARY_API_KEY,
    api_secret: config.cloudinary.CLOUDINARY_API_SECRET
});

const movieCtrl = {};

//GET
movieCtrl.getMovies = async (req, res) => {
    try {
        const movies = await moviesMdl.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//POST
movieCtrl.createMovie = async (req, res) => {
    try {
        console.log("Archivo recibido:", req.file);
        console.log("Datos recibidos:", req.body);

        // Validar que se haya enviado una imagen
        if (!req.file) {
            return res.status(400).json({ message: "Falta la imagen" });
        }

        // Subir imagen a Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            allowed_formats: ["jpg", "png", "jpeg"]
        });

        // Crear nueva película usando el spread operator
        const newMovie = new moviesMdl({
            ...req.body, // Agregar todos los campos enviados en el cuerpo de la solicitud
            imgUrl: result.secure_url // Agregar la URL de la imagen subida
        });

        // Guardar la película en la base de datos
        const savedMovie = await newMovie.save();
        res.status(201).json({ 
            message: "Película creada exitosamente", 
            movie: savedMovie 
        });
    } catch (error) {
        console.error("Error al crear la película:", error);
        res.status(500).json({ message: "Error al crear la película", error: error.message });
    }
}

//PUT
movieCtrl.updateMovie = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar la película existente
        const existingMovie = await moviesMdl.findById(id);
        if (!existingMovie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }

        // Si se envía un archivo, subir la nueva imagen a Cloudinary
        let updatedFields = { ...req.body }; // Copiar los campos enviados en el cuerpo de la solicitud
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "public",
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                allowed_formats: ["jpg", "png", "jpeg"]
            });
            updatedFields.imgUrl = result.secure_url; // Actualizar la URL de la imagen
        }

        // Actualizar la película en la base de datos
        const updatedMovie = await moviesMdl.findByIdAndUpdate(id, updatedFields, { new: true });
        res.status(200).json({ 
            message: "Película actualizada exitosamente", 
            movie: updatedMovie 
        });
    } catch (error) {
        console.error("Error al actualizar la película:", error);
        res.status(500).json({ message: "Error al actualizar la película", error: error.message });
    }
}

//DELETE
movieCtrl.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await moviesMdl.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default movieCtrl;