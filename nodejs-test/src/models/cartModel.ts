import mongoose, { Document } from 'mongoose';

export interface CartItem extends Document {
  productId: string;
  quantity: number;
}

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const CartItemModel = mongoose.model<CartItem>('CartItem', cartSchema);
export default CartItemModel;
