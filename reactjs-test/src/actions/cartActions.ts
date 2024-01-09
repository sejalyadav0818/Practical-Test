export const addToCart = (productId: string) => ({
    type: 'ADD_TO_CART',
    payload: productId,
  });
  
  export const updateCartItemQuantity = (cartItemId: string, quantity: number) => ({
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: { cartItemId, quantity },
  });
  