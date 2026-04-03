import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { getOneProductIdController } from "../controllers/products/getOneProductIdController.js";
import { getAllProductsController } from "../controllers/products/getAllProductsController.js";
const router = Router();

router.get(
    '/', ctrlWrapper(getAllProductsController)
);

router.get(
    '/:productId',
    isValidId,
    ctrlWrapper(getOneProductIdController)
);

export default router;