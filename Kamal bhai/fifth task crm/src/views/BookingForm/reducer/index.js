import {
  
  AGENT,
  AGENT_FAILURE,
  AGENT_SUCCESS,
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
 ALL_LEAD_USER,
  ALL_LEAD_USER_SUCCESS,
  ALL_LEAD_USERS_FAILURE,
  INSERTNOMINEE,INSERTNOMINEE_FAILURE,INSERTNOMINEE_SUCCESS,
  ALLPOSITION,ALLPOSITION_SUCCESS,ALLPOSITION_FAILURE,
  PLOTPOSITION,PLOTPOSITION_FAILURE,PLOTPOSITION_SUCCESS,
  FORM,FORM_FAILURE,FORM_SUCCESS,
  INTEGRATECRM,INTEGRATECRM_FAILURE,INTEGRATECRM_SUCCESS
} from "../constant";
const INITIAL_STATE = {
  Integrate:null,
  Users: null,
  Data:null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  Delete: null,

  LeadUserId: null,
  Nominee:null,
  AllPositions:null,
  Position:null,
  Forms:null,
};
export default (body = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return body;
      case INTEGRATECRM:
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Integrate: null,
      
        };
      case INTEGRATECRM_SUCCESS:
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          Integrate: action.payload,
        };
      case INTEGRATECRM_FAILURE:
        return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };
      case FORM:
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Forms: null,
      
        };
      case FORM_SUCCESS:
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          Forms: action.payload,
        };
      case FORM_FAILURE:
        return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };
      case PLOTPOSITION:
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Position: null,
      
        };
      case PLOTPOSITION_SUCCESS:
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          Position: action.payload,
        };
      case PLOTPOSITION_FAILURE:
        return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };

      case ALLPOSITION:
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          AllPositions: null,
      
        };
      case ALLPOSITION_SUCCESS:
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          AllPositions: action.payload,
        };
      case ALLPOSITION_FAILURE:
        return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };
      case INSERTNOMINEE:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      
        Nominee:null,
      };
    case INSERTNOMINEE_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Nominee: action.payload,
      };
    case INSERTNOMINEE_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };
 
    case AGENT:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case AGENT_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case AGENT_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };
      case FETCH_CONTACTS:
       
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Users: null,
          error: {},
        };
      case FETCH_CONTACTS_SUCCESS:
        
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          Users: action.payload,
        };
      case FETCH_CONTACTS_FAILURE:
               return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };


        case FETCH_DATA:
          
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Data: null,
          error: {},
        };
      case FETCH_DATA_SUCCESS:
   
        
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          Data: action.payload,
        };
      case FETCH_DATA_FAILURE:
    
               return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };

        case ALL_LEAD_USER:
        return {
          ...body,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          LeadUserId: null,
          error: {},
        };
      case ALL_LEAD_USER_SUCCESS:
        
        return {
          ...body,
          isLoading: false,
          isLoggedIn: true,
          LeadUserId: action.payload,
        };
      case ALL_LEAD_USERS_FAILURE:
               return {
          ...body,
          isLoading: false,
          isError: true,
          error: action.error,
        };
  }
};
