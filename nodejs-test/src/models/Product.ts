import mongoose, { Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  image: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
});

const ProductModel = mongoose.model<Product>('Product', productSchema);
export default ProductModel;