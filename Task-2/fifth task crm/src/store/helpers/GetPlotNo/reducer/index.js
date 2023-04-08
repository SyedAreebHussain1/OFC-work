import {
  

   PLOTNO, PLOTNO_SUCCESS, PLOTNO_FAILURE,
  
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  DetailS: null,

  PlotNo:null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    
    
    
    
    
    case PLOTNO:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotNo: null,
        error: {},
      };
    case PLOTNO_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PlotNo: action.payload,
      };
    case PLOTNO_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    
  }
};
