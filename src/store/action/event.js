import axios from "../../utils/axios";

export const createDataEvent = (data) => {
  return {
    type: "CREATE_DATA_EVENT",
    payload: axios.post("event/", data),
  };
};

export const getDataEvent = (page) => {
  return {
    type: "GET_DATA_EVENT",
    payload: axios.get(
      `event?page=${page}&limit=5&searchName=&sort=name asc&searchDateShow=`
    ),
  };
};
