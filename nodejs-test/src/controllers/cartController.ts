import { Request, Response } from 'express';
import CartItemModel from '../models/cartModel';

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const existingCartItem = await CartItemModel.findOne({ productId });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      const cartItem = new CartItemModel({ productId, quantity });
      await cartItem.save();
    }

    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCartItemQuantity = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = await CartItemModel.findOne({ productId });

    if (cartItem) {
      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json({ message: 'Cart item quantity updated successfully' });
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const listCart = async (_: Request, res: Response) => {
  try {
    const cartItems = await CartItemModel.find().populate('productId');
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
