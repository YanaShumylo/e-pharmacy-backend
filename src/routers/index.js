import express from 'express';
import customersRouter from './customers.js';
import authRouter from './auth.js';
import pharmaciesRouter from './pharmacies.js';
import productsRouter from './products.js';

const router = express.Router();

router.use('/api/user', authRouter);

router.use('/api/customers', customersRouter);

router.use('/api/stores', pharmaciesRouter);

router.use('/api/products', productsRouter);

export default router;
