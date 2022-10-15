const initialState = {
  data: [], //for store the data
  isLoading: false,
  isError: false,
  message: "",
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "CREATE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "CREATE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
    case "UPDATE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "",
      };
    }
    case "DELETE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "DELETE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "DELETE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "",
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
