import { Router } from "express";
import { getCustomerByIdController } from '../controllers/customers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get(
    '/user-info/:customerId',
    authenticate,
    ctrlWrapper(getCustomerByIdController)
);

export default router;
