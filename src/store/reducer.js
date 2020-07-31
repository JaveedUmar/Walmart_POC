export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        products: action.payload.products
      };

    default:
      return state;
  }
};
