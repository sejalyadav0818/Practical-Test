import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, Product } from '../types/types';
import * as productActions from '../actions/productActions';
import { ProductActionTypes } from '../types/types';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(productActions.listProducts() as ThunkAction<void, RootState, unknown, ProductActionTypes>);
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
