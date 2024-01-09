import React from 'react';
import { CartItem } from '../types/types';

interface CartListProps {
  cartItems: CartItem[];
}

const CartList: React.FC<CartListProps> = ({ cartItems }) => {
  return (
    <div>
      <h3>Cart Items:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>

            Product: {item.product.name}, Quantity: {item.quantity}, Unit Price: {item.product.unitPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
