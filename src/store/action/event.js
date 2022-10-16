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
      `event?page=${page}&limit=3&searchName=&sort=name asc&searchDateShow=`
    ),
  };
};

export const updateDataEvent = (data, eventId) => {
  return {
    type: "UPDATE_DATA_EVENT",
    payload: axios.patch(`event/${eventId}`, data),
  };
};

export const deleteDataEvent = (eventId) => {
  return {
    type: "DELETE_DATA_EVENT",
    payload: axios.delete(`event/${eventId}`),
  };
};
