import {
  AGENT,
  AGENT_SUCCESS,
  AGENT_FAILURE,
  SAVE_AGENT,
  SAVE_AGENT_SUCCESS,
  SAVE_AGENT_FAILURE,
  SAVE_TEAM,
  SAVE_TEAM_SUCCESS,
  SAVE_TEAM_FAILURE,
  UPDATEEMPLOYEE,UPDATEEMPLOYEE_SUCCESS,UPDATEEMPLOYEE_FAILURE,
  DELETEEMPLOYEE_FAILURE,DELETEEMPLOYEE_SUCCESS,DELETEEMPLOYEE
} from "../constant";
const INITIAL_STATE = {
  Data: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  AssignResponse: null,
  Update:null,
  Delete:null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
      case DELETEEMPLOYEE:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
        Delete: null,
          error: {},
        };
      case DELETEEMPLOYEE_SUCCESS:
         return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Delete: action.payload,
        };
      case DELETEEMPLOYEE_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
      case UPDATEEMPLOYEE:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
        Update: null,
          error: {},
        };
      case UPDATEEMPLOYEE_SUCCESS:
         return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Update: action.payload,
        };
      case UPDATEEMPLOYEE_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };


    case AGENT:
  
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Data: null,
        error: {},
      };
    case AGENT_SUCCESS:

      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Data: action.payload,
      };
    case AGENT_FAILURE:
  

      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // second Api state

    case SAVE_AGENT:
    
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case SAVE_AGENT_SUCCESS:
    
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case SAVE_AGENT_FAILURE:
     
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // TEAM Api state

    case SAVE_TEAM:
  
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        AssignResponse: null,
        error: {},
      };
    case SAVE_TEAM_SUCCESS:
     
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        AssignResponse: action.payload,
      };
    case SAVE_TEAM_FAILURE:
      
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
