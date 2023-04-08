import {


  PROJECTFILE, PROJECTFILE_FAILURE, PROJECTFILE_SUCCESS, 
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  File: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    
    
    
    
    case PROJECTFILE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        File: null,
        error: {},
      };
    case PROJECTFILE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        File: action.payload,
      };
    case PROJECTFILE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    
  }
};
