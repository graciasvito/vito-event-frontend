import axios from "../../utils/axios";

export const getDataProduct = () => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(
      `product?searchName=&sort=&limit=30&page=1&searchDateCreated=`
    ),
  };
};

export const createDataProduct = (data) => {
  return {
    type: "CREATE_DATA_PRODUCT",
    payload: axios.post("product", data),
  };
};

export const updateDataProduct = (data, id) => {
  return {
    type: "UPDATE_DATA_PRODUCT",
    payload: axios.patch(`product/${id}`, data),
  };
};

export const deleteDataProduct = (id) => {
  return {
    type: "DELETE_DATA_PRODUCT",
    payload: axios.delete(`product/${id}`),
  };
};
