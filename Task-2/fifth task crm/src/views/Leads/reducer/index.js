import { 
  LEAD, 
  LEAD_SUCCESS, 
  LEAD_FAILURE, 

  NEWUSER, 
  NEWUSER_SUCCESS, 
  NEWUSER_FAILURE, 
   
  ORDERSTATUS, 
  ORDERSTATUS_SUCCESS, 
  ORDERSTATUS_FAILURE

} from "../constant.js";
const INITIAL_STATE = {

  // SHOWLEADS USMAN
  Data: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  // INSERT USER MUSTAFA
  INSERT_USER: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,


  // ORDER STATUS MUSTAFA
  OrderReport: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
      // SHOW LEADS USMAN 
    case LEAD:
    
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Data: null,
        error: {},
      };
    case LEAD_SUCCESS:
   
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Data: action.payload,
      };
    case LEAD_FAILURE:
  
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
      // INSERT NEW USER MUSTAFA
      case NEWUSER:
     
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        INSERT_USER: null,
        error: {},
      };
    case NEWUSER_SUCCESS:
     
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        INSERT_USER: action.payload,
      };
    case NEWUSER_FAILURE:
    
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
      // ORDER STATUS MUSTAFA
      case ORDERSTATUS:
      
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        OrderReport: null,
        error: {},
      };
    case ORDERSTATUS_SUCCESS:
  
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        OrderReport: action.payload,
      };
    case ORDERSTATUS_FAILURE:
   
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

      // INSERT NEW USER MUSTAFA

      case NEWUSER:
     
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        INSERT_USER: null,
        error: {},
      };
    case NEWUSER_SUCCESS:
     
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        INSERT_USER: action.payload,
      };
    case NEWUSER_FAILURE:
   

      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };


      // ORDER STATUS MUSTAFA

      case ORDERSTATUS:
     
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        OrderReport: null,
        error: {},
      };
    case ORDERSTATUS_SUCCESS:
    
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        OrderReport: action.payload,
      };
    case ORDERSTATUS_FAILURE:
     

      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};