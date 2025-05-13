import e from "express";
import movieCtrl from "../controllers/moviesCtrl.js";
import multer from "multer";

const router = e.Router();

const upload = multer({dest: 'public/'});
router.route('/').get(movieCtrl.getMovies).post(upload.single("imgUrl"), movieCtrl.createMovie);
router.route('/:id').put(upload.single("imgUrl"), movieCtrl.updateMovie).delete(movieCtrl.deleteMovie);

export default router;