import products from "./product";


export const fetchProducts = pageNumber => async dispatch => {
  const response = await products.get(`/walmartproducts/${pageNumber}/8`);
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data
  });
};

