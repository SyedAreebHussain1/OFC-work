import {
 
  PLOTSECTOR,
  PLOTSECTOR_SUCCESS,
  PLOTSECTOR_FAILURE,
  
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Sector:null,
 
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    
    case PLOTSECTOR:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Sector: null,
        error: {},
      };
    case PLOTSECTOR_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Sector: action.payload,
      };
    case PLOTSECTOR_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    
  }
};
