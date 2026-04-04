import express from 'express';
import customersReviewsRouter from './customersReviews.js';
import authRouter from './auth.js';
import pharmaciesRouter from './pharmacies.js';
import productsRouter from './products.js';

const router = express.Router();

router.use('/api/user', authRouter);

router.use('/api/customer-reviews', customersReviewsRouter);

router.use('/api/stores', pharmaciesRouter);

router.use('/api/products', productsRouter);

export default router;
