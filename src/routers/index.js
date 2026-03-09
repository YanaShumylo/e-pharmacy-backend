import express from 'express';
import customersRouter from './customers.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/api/user', authRouter);

router.use('/api/user', customersRouter);



export default router;
