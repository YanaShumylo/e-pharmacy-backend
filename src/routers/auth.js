import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema,loginUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth/registerUserController.js';
import { loginUserController } from '../controllers/auth/loginUserController.js';
import { logoutUserController } from '../controllers/auth/logoutUserController.js';
import { refreshUserSessionController } from '../controllers/auth/refresh.js';
import { validateBody } from '../middlewares/validateBody.js';
import { getUserInfoController } from '../controllers/getUserInfoController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.get(
  '/logout',
  ctrlWrapper(logoutUserController)
);

router.post(
  '/refresh',
  ctrlWrapper(refreshUserSessionController)
);

router.get(
    '/user-info',
    authenticate,
    ctrlWrapper(getUserInfoController)
);

export default router;
