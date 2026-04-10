import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema,loginUserSchema } from '../validation/auth.js';
import { registerUserController, loginUserController, logoutUserController, refreshUserSessionController, getUserInfoController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.post(
  '/register',
  upload.single('image'),
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
