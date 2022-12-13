const initialState = {
  data: [], //for store the data
  isLoading: false,
  isError: false,
  message: "",
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_BOOKING_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        pagination: action.payload.data.pagination,
      };
    }
    case "GET_DATA_BOOKING_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default event;
