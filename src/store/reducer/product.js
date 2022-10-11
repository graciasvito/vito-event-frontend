const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA PRODUCT
  isLoading: false,
  isError: false,
  message: "",
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "GET_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case "GET_DATA_PRODUCT_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    case "CREATE_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.message,
      };
    }
    case "CREATE_DATA_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload.data.message,
      };
    }
    case "UPDATE_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: "",
      };
    }
    case "UPDATE_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "UPDATE_DATA_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
    case "DELETE_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "DELETE_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "DELETE_DATA_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default product;
