import {
    QUOTATION,QUOTATION_FAILURE,QUOTATION_SUCCESS
    } from "../constant.js";
    export class QuotationDetail {
      static Quotation() {
        return {
          type: QUOTATION,
        };
      }
      static Quotation_Success(response) {
        return {
          type: QUOTATION_SUCCESS,
          payload: response,
        };
      }
      static Quotation_Failure(error) {
        return {
          type: QUOTATION_FAILURE,
          error,
        };
      }
    }