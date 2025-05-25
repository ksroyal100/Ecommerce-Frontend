import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    let queryParams = [];

    if (color) queryParams.push(`color=${color}`);
    if (size) queryParams.push(`size=${size}`);
    if (minPrice !== undefined) queryParams.push(`minPrice=${minPrice}`);
    if (maxPrice !== undefined) queryParams.push(`maxPrice=${maxPrice}`);
    if (minDiscount !== undefined)
      queryParams.push(`minDiscount=${minDiscount}`);
    if (category) queryParams.push(`category=${category}`);
    if (stock !== undefined && stock !== null)
      queryParams.push(`stock=${stock}`);
    if (sort) queryParams.push(`sort=${sort}`);
    if (pageNumber) queryParams.push(`pageNumber=${pageNumber}`);
    if (pageSize) queryParams.push(`pageSize=${pageSize}`);

    const queryString = queryParams.join("&");

    const { data } = await api.get(`/api/products?${queryString}`);
console.log("reqData:", reqData);
console.log("Final URL:", `/api/products?${queryString}`);


    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log(data);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
