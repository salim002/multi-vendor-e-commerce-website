import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Get all products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "getAllProductsShopRequest",
      });
  
      const { data } = await axios.get(
        `${server}/product/get-all-products-shop/${id}`
      );
      dispatch({
        type: "getAllProductsShopSuccess",
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: "getAllProductsShopFailed",
        payload: error.response.data.message,
      });
    }
  };
