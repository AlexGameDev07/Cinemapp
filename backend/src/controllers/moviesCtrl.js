import moviesMdl from "../models/moviesMdl.js";

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
    const movie = new moviesMdl(req.body);
    try {
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//PUT
movieCtrl.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await moviesMdl.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(updatedMovie);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
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