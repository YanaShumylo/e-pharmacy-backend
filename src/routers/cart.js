import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getCartItemsController, updateCartController, checkoutCartController } from "../controllers/carts.js";
import { validateBody } from '../middlewares/validateBody.js';
import { updateCartSchema, checkoutCartSchema } from "../validation/cart.js";

const router = Router();

router.use(authenticate);

router.get(
'/',
ctrlWrapper(getCartItemsController));

router.put(
'/update',
validateBody(updateCartSchema),
ctrlWrapper(updateCartController));

router.post(
'/checkout',
validateBody(checkoutCartSchema),
ctrlWrapper(checkoutCartController));

export default router;