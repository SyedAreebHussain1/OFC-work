import {
   
    DETAILS,
    DETAILS_FAILURE,
    DETAILS_SUCCESS,
 
  } from "../constant";
  const INITIAL_STATE = {
   
    Detail: null,

  };
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;

      case DETAILS:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Detail: null,
          error: {},
        };
      case DETAILS_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Detail: action.payload,
        };
      case DETAILS_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
     
    }
  };
  