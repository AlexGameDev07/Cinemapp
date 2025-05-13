import e from "express";
import movieCtrl from "../controllers/moviesCtrl.js";

const router = e.Router();
router.route('/').get(movieCtrl.getMovies).post(movieCtrl.createMovie);
router.route('/:id').put(movieCtrl.updateMovie).delete(movieCtrl.deleteMovie);

export default router;