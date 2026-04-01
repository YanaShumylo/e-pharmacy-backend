import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllPharmaciesController } from '../controllers/pharmacies/getAllPharmaciesController.js';
import {getPharmaciesNearestController} from '../controllers/pharmacies/getPharmaciesNearestController.js'

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
