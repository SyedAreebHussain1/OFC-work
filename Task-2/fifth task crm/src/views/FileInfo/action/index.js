

import { DETAILS, DETAILS_SUCCESS, DETAILS_FAILURE,

  } from "../constant.js";
  
 
  
  export class DetailsClient {
    static Details() {
      return {
        type: DETAILS,
      };
    }
    static Details_Success(response) {
      return {
        type: DETAILS_SUCCESS,
        payload: response,
      };
    }
    static Details_Failure(error) {
      return {
        type: DETAILS_FAILURE,
        error,
      };
    }
   
  }
