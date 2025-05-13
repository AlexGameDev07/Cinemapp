import e from "express";

import customerCtrl from "../controllers/customersCtrl.js";

const router = e.Router();

router.route('/').get(customerCtrl.getCustomers);
router.route('/:id').put(customerCtrl.updateCustomer).delete(customerCtrl.deleteCustomer);

export default router;