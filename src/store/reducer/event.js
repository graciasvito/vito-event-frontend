const initialState = {
  data: [], //for store the data
  isLoading: false,
  isError: false,
  pagination: {},
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
        pagination: action.payload.data.pagination,
      };
    }
    case "GET_DATA_EVENT_REJECTED": {
      return {
        ...state,
        data: [],
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
