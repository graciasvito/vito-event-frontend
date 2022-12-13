import axios from "../../utils/axios";

export const getDataBooking = (userId) => {
  return {
    type: "GET_DATA_BOOKING",
    payload: axios.get(`booking/${userId}`),
  };
};
