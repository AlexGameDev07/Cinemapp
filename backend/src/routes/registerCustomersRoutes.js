import express from 'express';
import registerCustomersCtrl from '../controllers/registerCustomers.js';
const router = express.Router();
router.route('/').post(registerCustomersCtrl.register);
router.route('/verifyCodeEmail').post(registerCustomersCtrl.verifyCodeEmail);
export default router;