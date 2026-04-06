import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getCartItemsController } from "../controllers/carts/getCartItemsController.js";
import { updateCartController } from "../controllers/carts/updateCartController.js";
import { checkoutCartController } from "../controllers/carts/checkoutCartController.js";

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getCartItemsController));

router.put('/update', ctrlWrapper(updateCartController));

router.post('/checkout', ctrlWrapper(checkoutCartController));

export default router;