import { PROJECTS,PROJECTS_FAILURE,PROJECTS_SUCCESS } from "../constant";

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    
    ProjectsName: null,
   
  };
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
  
      case PROJECTS:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          ProjectsName: null,
          error: {},
        };
      case PROJECTS_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          ProjectsName: action.payload,
        };
      case PROJECTS_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
  
    
    
    }
  };
  