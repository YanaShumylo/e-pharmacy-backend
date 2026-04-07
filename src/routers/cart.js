import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getCartItemsController } from "../controllers/carts/getCartItemsController.js";
import { updateCartController } from "../controllers/carts/updateCartController.js";
import { checkoutCartController } from "../controllers/carts/checkoutCartController.js";
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