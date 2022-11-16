import {
 
  
PLOTSTATUS, PLOTSTATUS_SUCCESS, PLOTSTATUS_FAILURE,
  PLOTINFO_FAILURE, PLOTINFO, PLOTINFO_SUCCESS,
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
 
  Status: null,
  Info: null,
  
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case PLOTSTATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Status: null,
        error: {},
      };
    case PLOTSTATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Status: action.payload,
      };
    case PLOTSTATUS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTINFO:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Info: null,
        error: {},
      };
    case PLOTINFO_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Info: action.payload,
      };
    case PLOTINFO_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  
  }
};
