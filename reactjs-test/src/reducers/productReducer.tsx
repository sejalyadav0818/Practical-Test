import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types/types';
import { Product } from '../types/types';

const initialState: Product[] = [];

// Action Types
const ADD_PRODUCT = 'ADD_PRODUCT';
const LIST_PRODUCTS_SUCCESS = 'LIST_PRODUCTS_SUCCESS';
const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export const addProduct = (productData: Product) => ({
  type: ADD_PRODUCT,
  payload: productData,
});

export const listProductsSuccess = (products: Product[]) => ({
  type: LIST_PRODUCTS_SUCCESS,
  payload: products,
});

export const listProducts = (): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/products/list'); // Replace with your API endpoint
      const products = await response.json();

      dispatch(listProductsSuccess(products));
    } catch (error) {
      console.error(error);
    }
  };
};

// Reducer
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case LIST_PRODUCTS_SUCCESS:
    case UPDATE_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export default productReducer;