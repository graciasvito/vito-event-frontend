import axios from "../../utils/axios";

export const getDataUser = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};

export const updateImageUser = (data, id) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/image/${id}`, data),
  };
};
