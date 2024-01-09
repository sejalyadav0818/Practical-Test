import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types/types';

// Import the Product and CartItem types
import { Product, CartItem } from '../types/types';

// Action types
interface AddProductAction {
  type: 'ADD_PRODUCT';
  payload: Product;
}

interface ListProductsAction {
  type: 'LIST_PRODUCTS';
  payload: Product[]; // Assuming the payload is an array of products
}

export type ProductActionTypes = AddProductAction | ListProductsAction;

// Action Creators
export const addProduct = (productData: Product): ThunkAction<void, RootState, unknown, ProductActionTypes> => {
  return async (dispatch: Dispatch) => {
    try {
      const addedProduct = await fetch('/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      }).then(res => res.json());

      dispatch({ type: 'ADD_PRODUCT', payload: addedProduct });
    } catch (error) {
      console.error(error);
    }
  };
};

export const listProducts = (): ThunkAction<void, RootState, unknown, ProductActionTypes> => {
  return async (dispatch: Dispatch) => {
    try {
      const products = await fetch('/products/list').then(res => res.json());

      dispatch({ type: 'LIST_PRODUCTS', payload: products });
    } catch (error) {
      console.error(error);
    }
  };
};
