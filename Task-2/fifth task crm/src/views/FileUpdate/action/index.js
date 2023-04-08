import {
    CUSTOMER_DATA,
    CUSTOMER_DATA_SUCCESS,
    CUSTOMER_DATA_FAILURE
} from "../constant"


export class Customer_File_Update {
    static Customer() {
      return {
        type: CUSTOMER_DATA,
      };
    }
    static Customer_Success(response) {
      return {
        type: CUSTOMER_DATA_SUCCESS,
        payload: response,
      };
    }
    static Customer_Failure(error) {
      return {
        type: CUSTOMER_DATA_FAILURE,
        error,
      };
    }
}
   