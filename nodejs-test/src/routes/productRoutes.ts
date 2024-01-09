import express from 'express';
import { addProduct, listProducts } from '../controllers/productController';

const router = express.Router();

// Product Routes
router.post('/add', addProduct);
router.get('/list', listProducts);



export default router;
