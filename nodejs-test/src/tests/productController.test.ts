import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ProductModel from '../models/Product';
import * as productController from '../controllers/productController';

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

describe('Product Controllers', () => {
  beforeEach(async () => {
    await ProductModel.deleteMany({});
  });

  it('should add a product', async () => {
    const req = {
      body: { name: 'Product 1', image: 'image.jpg', description: 'Description', quantity: 10, unitPrice: 20 },
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Response;

    await productController.addProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();

    const product = await ProductModel.findOne({ name: 'Product 1' });
    expect(product).toBeDefined();
    expect(product?.quantity).toBe(10);
  });

  it('should list products', async () => {
    await ProductModel.create({ name: 'Product 1', image: 'image.jpg', description: 'Description', quantity: 10, unitPrice: 20 });

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Response;

    await productController.listProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ name: 'Product 1', quantity: 10, unitPrice: 20 }]);
  });
});
