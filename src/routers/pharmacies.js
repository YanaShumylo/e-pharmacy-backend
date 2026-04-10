import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllPharmaciesController, getPharmaciesNearestController } from '../controllers/pharmacies.js';

const router = Router();

router.get(
    '/',
    ctrlWrapper(getAllPharmaciesController)
);

router.get(
    '/nearest',
    ctrlWrapper(getPharmaciesNearestController)
);

export default router;
