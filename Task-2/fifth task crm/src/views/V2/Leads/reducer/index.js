import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_NEW_CONTACTS,
  ADD_NEW_CONTACTS_FAILURE,
  ADD_NEW_CONTACTS_SUCCESS,
  ASSIGN_LEADS,
  ASSIGN_LEADS_SUCCESS,
  ASSIGN_LEADS_FAILURE,
  DOWNLOAD_FILE,DOWNLOAD_FILE_FAILURE,DOWNLOAD_FILE_SUCCESS
} from "../constants.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  AssignResponse: null,
  File:null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
      case DOWNLOAD_FILE:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          File: null,
          error: {},
        };
      case DOWNLOAD_FILE_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          File: action.payload,
        };
        case DOWNLOAD_FILE_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };



    case FETCH_CONTACTS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Users: null,
        error: {},
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Users: action.payload,
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_NEW_CONTACTS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case ADD_NEW_CONTACTS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case ADD_NEW_CONTACTS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ASSIGN_LEADS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        AssignResponse: null,
        error: {},
      };
    case ASSIGN_LEADS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        AssignResponse: action.payload,
      };
    case ASSIGN_LEADS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
