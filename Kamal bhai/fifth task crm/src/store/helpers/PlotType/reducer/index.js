import {
  
  
  PLOTTYPE,
  PLOTTYPE_SUCCESS,
  PLOTTYPE_FAILURE,
  PLOTSIZE, PLOTSIZE_FAILURE, PLOTSIZE_SUCCESS
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Type: null,
  Size: null,
  
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    
    case PLOTTYPE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Type: null,
        error: {},
      };
    case PLOTTYPE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Type: action.payload,
      };
    case PLOTTYPE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTSIZE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Size: null,
        error: {},
      };
    case PLOTSIZE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Size: action.payload,
      };
    case PLOTSIZE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
}
}
   