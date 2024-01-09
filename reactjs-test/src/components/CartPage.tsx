import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';
import CartList from '../components/CartList';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <CartList cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
