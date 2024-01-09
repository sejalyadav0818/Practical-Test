import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import CartItemModel from '../models/cartModel';
import * as cartController from '../controllers/cartController';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Cart Controllers', () => {
  beforeEach(async () => {
    await CartItemModel.deleteMany({});
  });

  it('should add an item to the cart', async () => {
    const req = {
      body: { productId: '1', quantity: 2 },
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Response;

    await cartController.addToCart(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Item added to cart successfully' });

    const cartItem = await CartItemModel.findOne({ productId: '1' });
    expect(cartItem).toBeDefined();
    expect(cartItem?.quantity).toBe(2);
  });

  it('should update the quantity of an item in the cart', async () => {
    await CartItemModel.create({ productId: '1', quantity: 1 });

    const req = {
      body: { productId: '1', quantity: 3 },
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Response;

    await cartController.updateCartItemQuantity(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cart item quantity updated successfully' });

    const cartItem = await CartItemModel.findOne({ productId: '1' });
    expect(cartItem?.quantity).toBe(3);
  });

  it('should list items in the cart', async () => {
    await CartItemModel.create({ productId: '1', quantity: 1 });

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Response;

    await cartController.listCart(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ productId: '1', quantity: 1 }]);
  });
});
