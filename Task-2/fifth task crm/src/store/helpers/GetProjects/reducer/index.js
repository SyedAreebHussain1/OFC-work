import {
  PROJECT,
  PROJECT_SUCCESS,
  PROJECT_FAILURE,
  

   
  
  
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Updatestatus: null,
  Order: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case PROJECT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Project: null,
        error: {},
      };
    case PROJECT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Project: action.payload,
      };
    case PROJECT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    


    
          
          
  }
};
