import { 
    APPROVAL,
    APPROVAL_SUCCESS,
    APPROVAL_FAILURE
} from "../constant.js"

const INITIAL_STATE = {
    ApprovalCheck: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    Response: null,
    AssignResponse: null,
  };
  
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
      case APPROVAL:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          ApprovalCheck: null,
          error: {},
        };
      case APPROVAL_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          ApprovalCheck: action.payload,
        };
      case APPROVAL_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
    }
}