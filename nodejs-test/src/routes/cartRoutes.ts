import express from 'express';
import { addToCart, updateCartItemQuantity, listCart } from '../controllers/cartController';

const router = express.Router();

router.post('/add', addToCart);
router.put('/update-quantity', updateCartItemQuantity);
router.get('/list', listCart);

export default router;
