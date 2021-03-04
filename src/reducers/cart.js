const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...cart, action.payload];
    case 'DELETE_FROM_CART':
      return cart.filter(cartItem => cartItem !== action.payload);
    default:
      return cart;
  }
};

export default cartReducer;
