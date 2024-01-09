import { Request, Response } from 'express';
import Product from '../models/Product';

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, image, description, quantity, unitPrice } = req.body;
     const product = new Product({ name, image, description, quantity, unitPrice });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
