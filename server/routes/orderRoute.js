import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/:gigId', verifyToken, createOrder);
router.get('/', verifyToken, getOrders);

export default router;
