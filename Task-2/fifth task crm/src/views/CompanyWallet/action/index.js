import {
  GET_COMPANY_WALLET,
  GET_COMPANY_WALLET_SUCCESS,
  GET_COMPANY_WALLET_FAILURE,
} from "../constant";

export class GetCompanyWallet {
  static Fetch() {
    return {
      type: GET_COMPANY_WALLET,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_COMPANY_WALLET_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_COMPANY_WALLET_FAILURE,
      error,
    };
  }
}
