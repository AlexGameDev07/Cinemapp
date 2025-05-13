import e from "express";
import employeesCtrl from "../controllers/employeesCtrl.js";

const router = e.Router();

router.route('/').get(employeesCtrl.getEmployees);
router.route('/:id').put(employeesCtrl.updateEmployee).delete(employeesCtrl.deleteEmployee);

export default router;