import { Router } from "express";
import { getAllReviewsController } from "../controllers/reviews.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get(
    '/', ctrlWrapper(getAllReviewsController)
);

export default router;
