import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { getOneProductIdController, getAllProductsController } from "../controllers/products.js";
const router = Router();

router.get(
    '/', ctrlWrapper(getAllProductsController)
);

router.get(
    '/:productId',
    isValidId('productId'),
    ctrlWrapper(getOneProductIdController)
);

export default router;