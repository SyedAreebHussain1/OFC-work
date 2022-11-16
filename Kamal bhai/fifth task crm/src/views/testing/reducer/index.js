import { 
    LEAD_DATA,
    LEAD_DATA_SUCCESS,
    LEAD_DATA_FAILURE

} from '../constant';


const INITIAL_STATE = {

    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    
  
    LeadkaData: null,
    
    };
  
    
  export default (body = INITIAL_STATE, action) => {
      switch (action.type) {
        default:
          return body;
          case LEAD_DATA:
            return {
              ...body,
              isLoading: true,
              isError: false,
              isLoggedIn: false,
              LeadkaData: null,
              error: {},
            };
          case LEAD_DATA_SUCCESS:
            return {
              ...body,
              isLoading: false,
              isLoggedIn: true,
              LeadkaData: action.payload,
            };
          case LEAD_DATA_FAILURE:
            return {
              ...body,
              isLoading: false,
              isError: true,
              error: action.error,
            };
          }
      }  