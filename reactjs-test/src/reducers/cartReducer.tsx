const cartReducer = (state = initialState, action: any): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem: CartItem = {
        product: action.payload, 
        id: action.payload._id, 
        quantity: 1,
      };
      return [...state, newItem];

    case 'UPDATE_CART_ITEM_QUANTITY':
      return state.map(item =>
        item.id === action.payload.cartItemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

export default cartReducer;
