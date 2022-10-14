const initialState = {
  data: [], //for store the data
  isLoading: false,
  isError: false,
  message: "",
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_EVENT_FULLFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.data.message,
      };
    }
    case "CREATE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.data.message,
      };
    }
    case "GET_DATA_EVENT_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case "GET_DATA_EVENT_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
  }
};

export default event;
