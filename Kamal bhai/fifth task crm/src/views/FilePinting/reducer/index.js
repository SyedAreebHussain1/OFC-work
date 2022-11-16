import {
  GET_FILE_DOWNLOAD_CUSTOMER,
  GET_FILE_DOWNLOAD_CUSTOMER_SUCCESS,
  GET_FILE_DOWNLOAD_CUSTOMER_FAILURE,
  FILE_DOCUMENTS,
  FILE_DOCUMENTS_SUCCESS,
  FILE_DOCUMENTS_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  fileCustomer: null,
  fileDocuments: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_FILE_DOWNLOAD_CUSTOMER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        fileCustomer: null,
        error: {},
      };
    case GET_FILE_DOWNLOAD_CUSTOMER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        fileCustomer: action.payload,
      };
    case GET_FILE_DOWNLOAD_CUSTOMER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case FILE_DOCUMENTS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        fileDocuments: null,
        error: {},
      };
    case FILE_DOCUMENTS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        fileDocuments: action.payload,
      };
    case FILE_DOCUMENTS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
