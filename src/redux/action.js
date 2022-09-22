const addProductToCart = (productItem) => {
  return {
    type: 'cart/add',
    payload: productItem,
  };
};

export { addProductToCart };
